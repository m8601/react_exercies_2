import React, { Component } from 'react';

import NavMenu from './NavMenu';
import Header from './Header';
import About from './About';
import MenuHeader from './MenuHeader';
import Menu from './Menu';

import './App.css';

const dishes = [
  {
    id: 'qwe124ras',
    dish: 'Delicious Dish',
    price: 32,
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nesciunt. Voluptas, illo?'
  },
  {
    id: 'qwefass',
    dish: 'Delicious Dish',
    price: 34,
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nesciunt. Voluptas, illo?'
  },
  {
    id: 'qwd32rfs',
    dish: 'Delicious Dish',
    price: 31,
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nesciunt. Voluptas, illo?'
  },
  {
    id: 'esac00a',
    dish: 'Delicious Dish',
    price: 26,
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nesciunt. Voluptas, illo?'
  },
  {
    id: 'sae2dczxc',
    dish: 'Delicious Dish',
    price: 38,
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nesciunt. Voluptas, illo?'
  },
];

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
        <Menu dishes={dishes}/>
      </div>
    );
  }
}

export default App;
