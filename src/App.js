import React from 'react';
import Navigation from './Navigation/Navigation'
import Logo from './Logo/Logo'
import WelcomeMessage from './/WelcomeMessage/WelcomeMEssage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />    
      <WelcomeMessage />

    </div>
  );
}

export default App;
