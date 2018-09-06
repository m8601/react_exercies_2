import React from 'react';
import PropTypes from 'prop-types';

import './NavMenu.css'

const NavMenu = ({isOpen, toggleMenu, linkClicked}) => {
  return (
    <div className="NavMenu">
      <div className="NavMenu__container">
        <a className="NavMenu__title">Touché</a>
        <div onClick={toggleMenu} className="NavMenu__toggleButton">
          <span className={`bar bar1 ${isOpen ? 'bar1--open' : ''}`}></span>
          <span className={`bar bar2 ${isOpen ? 'bar2--open' : ''}`}></span>
          <span className={`bar bar3 ${isOpen ? 'bar3--open' : ''}`}></span>
        </div>
        <div className={`NavMenu__links ${isOpen ? 'NavMenu__links--open' : ''}`}>
          <div className="NavMenu__linksContainer">
            <a onClick={linkClicked}>About</a>
            <a onClick={linkClicked}>Menu</a>
            <a onClick={linkClicked}>Gallery</a>
            <a onClick={linkClicked}>Chefs</a>
            <a onClick={linkClicked}>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

NavMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default NavMenu;