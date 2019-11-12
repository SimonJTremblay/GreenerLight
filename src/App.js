import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import WelcomeMessage from './Components/WelcomeMessage/WelcomeMEssage'
import Signin from './Components/Signin/Signin'
import Register from './Components/Register/Register'
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false
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
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        <Logo />
        {
          route === 'home'
          ?
            <WelcomeMessage />
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
