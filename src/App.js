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
import './App.css';
import {
  IS_ADMIN
} from './constants';

const initialState ={
    route: 'home',  //signin by default
    isSignedIn: true, // false by default
    allCategories: [],
    searchInput:'',
    user: {
      id: '',
      name: '',
      email: '',
      joined: '',
      permission: IS_ADMIN,
    },
    showModal: false,
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

  render(){
    const { isSignedIn, route, user, allCategories, searchInput } = this.state;
    const filteredCategories =allCategories.filter(categorie =>{
      return categorie.title.toLowerCase().includes(searchInput.toLowerCase())
    }) 

    return (
      <div className="App">
        <div className='flex justify-between pa3'>
          <Logo />
          {
            (route === 'home' && user.permission === IS_ADMIN) &&
              <h1>ADMIN</h1>
          }

            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />

        </div>
        {
          route === 'donate'
          ?
            <Donate />
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
