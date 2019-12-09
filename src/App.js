import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import WelcomeMessage from './Components/WelcomeMessage/WelcomeMEssage';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import SearchBox from './Components/SearchBox/SearchBox';
import CardList from './Components/CardList/CardList';
import Donate from './Components/Donate/Donate';
import Modal from './Components/Modal/Modal';
import AddCategory from './Components/AddCategory/AddCategory';
import Admin from './Components/Admin/Admin';
import './App.css';
import {
  IS_ADMIN,
  IS_USER,
} from './constants';

const initialState ={
    route: 'signin',  //signin by default
    isSignedIn: false, // false by default
    allCategories: [],
    searchInput:'',
    user: {
      id: '',
      name: '',
      email: '',
      joined: '',
      permission: IS_USER,
    },
    showModal: false,
    areRequestsPending: false,
    PendingRequestsList:[],
    updateRequestMessage:''

}
class App extends Component{
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        joined: data.joined,
        permission: data.permission
    }})
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      return this.setState(initialState);
    } else if (route === 'home'){
      this.setState({isSignedIn: true});
      this.getCategories();
      this.getCategoriesRequests();
    }
    this.setState({route:route});
  }

  onSearchChange = (event) => {
    this.setState({ searchInput: event.target.value });
  }

  onAddCategory = () => {
    this.setState({ route: 'addCategory'});
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  componentDidMount(){
    this.getCategories();
    this.getCategoriesRequests();
  }

  getCategories = () => {
    fetch('http://localhost:3000/categories/meta')
        .then(response => response.json())
        .then(result => {
            if(result[0].title.length){
                this.setState({ allCategories: result })
            } else{
                // TODO wrap card in error handling component
            }
        }) 
  }

  getCategoriesRequests = () => {
    fetch('http://localhost:3000/categories/pending')
      .then(response => response.json())
      .then(result => {
        if(result){
          if(result[0].title.length){
              this.setState({ areRequestsPending: true, PendingRequestsList: result })
          } else{
              // TODO wrap card in error handling component
          }
        }
      }) 
      .catch(err => {});  // not use how to deal with null return from knex
  }

  updatePendingCategories = (categoryId, answer) => {
    fetch('http://localhost:3000/categories/pending/', {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body:JSON.stringify({
                id: categoryId,
                state: answer === 'yes'? 1 : 3
            })
        })
        .then(response => response.json())
        .then(category => {
            if(category[0].id){ 
                this.setState(
                    {   
                      updateRequestMessage: `Success`,
                    },
                )
            }
        })
  }

  render(){
    const { isSignedIn, route, user, allCategories, searchInput, areRequestsPending, PendingRequestsList, updateRequestMessage } = this.state;
    const filteredCategories =allCategories.filter(categorie =>{
      return categorie.title.toLowerCase().includes(searchInput.toLowerCase())
    })
    const filteredCategoriesPending =PendingRequestsList.filter(categorie =>{
      return categorie.state === 2;
    })  

    return (
      <div className="App">
        <div className='flex justify-between pa3'>
          <Logo />
          {/* {
            (route === 'home' && user.permission === IS_ADMIN) &&
            <div className=" flex justify-center">
              <h2>ADMIN</h2>
              <IoIosWarning className="f2 red"/>
            </div>
          } */}

            <Navigation
              isSignedIn={isSignedIn}
              onRouteChange={this.onRouteChange}
              userPermission={user.permission}
              areRequestsPending={areRequestsPending}
            />

        </div>
        {
          route === 'donate'
          ?
            <Donate />
          :
          route ==='admin'
          ?
            <Admin 
              PendingRequestsList={filteredCategoriesPending}
              updatePendingCategories={this.updatePendingCategories}
              updateRequestMessage={updateRequestMessage}
            />
          :
            route === 'home'
            ?
              <div>
                <WelcomeMessage name={user.name} />
                <div className="flex center">
                  <SearchBox searchChange={this.onSearchChange} />
                  <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green" onClick={() => this.showModal()}>Add Category</button>                 
                </div>
                <CardList categories={filteredCategories} />
                <Modal show={this.state.showModal} handleClose={this.hideModal}>
                  <AddCategory />
                </Modal>
              </div>
            : (
                route === 'signin'
                ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              )
        }
      </div>
    );
  }
}

export default App;
