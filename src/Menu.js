import React from 'react';
import PropTypes from 'prop-types';

import './Menu.css';

const Menu = ({dishes}) => {
  return (
    <div className="Menu">
      <div className="Menu__category Menu__breakfast">
        <h2>Breakfast &amp; Starters </h2>
        <hr/>
        {
          dishes.map((el) => (
            <li key={el.id}>
              <div className="Menu__dishInfo">
                <p className="dish__name">{el.dish}</p>
                <span className="dish__price">{`$${el.price}`}</span>
              </div>
              <p className="dish__description">{el.desc}</p>
            </li>
          ))
        }
      </div>
      <div className="Menu__category Menu__mainCourse">
        <h2>Main Course </h2>
        <hr/>
        {
          dishes.map((el) => (
            <li key={el.id}>
              <div className="Menu__dishInfo">
                <p className="dish__name">{el.dish}</p>
                <span className="dish__price">{`$${el.price}`}</span>
              </div>
              <p className="dish__description">{el.desc}</p>
            </li>
          ))
        }
      </div>
      <div className="Menu__category Menu__dinner">
        <h2>Dinner </h2>
        <hr/>
        {
          dishes.map((el) => (
            <li key={el.id}>
              <div className="Menu__dishInfo">
                <p className="dish__name">{el.dish}</p>
                <span className="dish__price">{`$${el.price}`}</span>
              </div>
              <p className="dish__description">{el.desc}</p>
            </li>
          ))
        }
      </div>
      <div className="Menu__category Menu__drinks">
        <h2>Drinks </h2>
        <hr/>
        {
          dishes.map((el) => (
            <li key={el.id}>
              <div className="Menu__dishInfo">
                <p className="dish__name">{el.dish}</p>
                <span className="dish__price">{`$${el.price}`}</span>
              </div>
              <p className="dish__description">{el.desc}</p>
            </li>
          ))
        }
      </div>
    </div>
  );
}

Menu.propTypes = {
  dishes: PropTypes.array.isRequired
}

export default Menu;