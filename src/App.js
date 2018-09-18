import React, { Component } from 'react';

import NavMenu from './NavMenu';
import Header from './Header';
import About from './About';
import ParallaxHeader from './ParallaxHeader';
import Menu from './Menu';
import Gallery from './Gallery';

import './App.css';
import bgMenu from './img/menu-bg.jpg';
import bgGallery from './img/gallery-bg.jpg';

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
    menuOpen: false,
    activeCategory: 'all'
  }

  handleSetCategory = (cat) => {
    this.setState({
      activeCategory: cat
    })
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
        <ParallaxHeader bg={bgMenu} title={'Menu'}/>
        <Menu dishes={dishes}/>
        <ParallaxHeader bg={bgGallery} title={'Gallery'}/>
        <Gallery setCategory={this.handleSetCategory} activeCat={this.state.activeCategory}/>
      </div>
    );
  }
}

export default App;
