import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import WelcomeMessage from './Components/WelcomeMessage/WelcomeMEssage'
import Signin from './Components/Signin/Signin'
import Register from './Components/Register/Register'
import SearchBox from './Components/SearchBox/SearchBox'
import CardList from './Components/CardList/CardList'
import { Categories } from './Categories'
import './App.css';

const initialState ={
    route: 'home',
    isSignedIn: false,
    categories: Categories,
    input:'',
    user: {
      id: '',
      name: '',
      email: '',
      joined: ''
    }
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
        joined: data.joined
    }})
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      return this.setState(initialState);
    } else if (route === 'home'){
      this.setState({isSignedIn: true});
    }
    this.setState({route:route});
  }

  render(){
    const { isSignedIn, route, categories } = this.state;
  //   const filteredRobots =robots.filter(robot =>{
  //     return robot.name.toLowerCase().includes(searchField.toLowerCase())
  // }) 

    return (
      <div className="App">
        <div className='flex justify-between pa3'>
          <Logo />
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        </div>
        {
          route === 'home'
          ?
          <div>
            <WelcomeMessage name={this.state.user.name} />
            <SearchBox />
            <CardList categories={categories} />
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
