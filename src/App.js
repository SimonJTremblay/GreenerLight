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

class App extends Component{
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      categories: Categories,
      input:'',
    }
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false});
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
            <WelcomeMessage />
            <SearchBox />
            <CardList categories={categories} />
          </div>
          : (
            route === 'signin'
            ? <Signin onRouteChange={this.onRouteChange}/>
            : <Register onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    );
  }
}

export default App;
