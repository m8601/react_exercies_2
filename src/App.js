import React, { Component } from 'react';

import NavMenu from './NavMenu';
import Header from './Header';
import About from './About';
import MenuHeader from './MenuHeader';

import './App.css';

class App extends Component {
  state = {
    menuOpen: false
  }

  handleToggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  handleLinkClick = () => {
    this.setState({
      menuOpen: false
    })
  }

  render() {
    return (
      <div>
        <NavMenu linkClicked={this.handleLinkClick} toggleMenu={this.handleToggleMenu} isOpen={this.state.menuOpen}/>
        <Header/>
        <About/>
        <MenuHeader/>
      </div>
    );
  }
}

export default App;
