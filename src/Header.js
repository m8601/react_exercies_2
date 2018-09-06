import React from 'react';

import './Header.css';

const Header = (props) => {
  return (
    <div className="Header">
      <h1 className="Header__title">Touché</h1>
      <h2 className="Header__subtitle">Restaurant / Coffee / Pub</h2>
      <button className="Header__button">Discover story</button>
    </div>
  );
}

export default Header;