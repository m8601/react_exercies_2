import React from 'react';
import PropTypes from 'prop-types';

import './Gallery.css';

import img1 from './img/portfolio/01-large.jpg';
import img2 from './img/portfolio/02-large.jpg';
import img3 from './img/portfolio/03-large.jpg';
import img4 from './img/portfolio/04-large.jpg';
import img5 from './img/portfolio/05-large.jpg';
import img6 from './img/portfolio/06-large.jpg';
import img7 from './img/portfolio/07-large.jpg';
import img8 from './img/portfolio/08-large.jpg';
import img9 from './img/portfolio/09-large.jpg';
import img10 from './img/portfolio/10-large.jpg';
import img11 from './img/portfolio/11-large.jpg';
import img12 from './img/portfolio/12-large.jpg';

const portfolio = [
  {
    id: '12aszsxc',
    pic: img1,
    category: 'breakfast',
    dishName: 'Some fancy dish'
  },
  {
    id: '124rsf',
    pic: img2,
    category: 'breakfast',
    dishName: 'Some fancy dish'
  },
  {
    id: '125tgds',
    pic: img3,
    category: 'breakfast',
    dishName: 'Some fancy dish'
  },
  {
    id: '12teyhg',
    pic: img4,
    category: 'breakfast',
    dishName: 'Some fancy dish'
  },
  {
    id: '8654erdv',
    pic: img5,
    category: 'dinner',
    dishName: 'Some fancy dish'
  },
  {
    id: '654efb',
    pic: img6,
    category: 'dinner',
    dishName: 'Some fancy dish'
  },
  {
    id: '346ujhfgd',
    pic: img7,
    category: 'dinner',
    dishName: 'Some fancy dish'
  },
  {
    id: '123wh',
    pic: img8,
    category: 'dinner',
    dishName: 'Some fancy dish'
  },
  {
    id: 'asxcvbf',
    pic: img9,
    category: 'lunch',
    dishName: 'Some fancy dish'
  },
  {
    id: 'fgfh43',
    pic: img10,
    category: 'lunch',
    dishName: 'Some fancy dish'
  },
  {
    id: '346yrhfvvxc',
    pic: img11,
    category: 'lunch',
    dishName: 'Some fancy dish'
  },
  {
    id: 'qwesd123',
    pic: img12,
    category: 'lunch',
    dishName: 'Some fancy dish'
  },
];

const Gallery = ({activeCat, setCategory}) => {
  return (
    <div className="Gallery">
      <div className="Gallery__categories">
        <button 
          className={activeCat === 'all' ? 'btn btn--active' : 'btn'}
          onClick={() => {setCategory('all')}}>All</button>
        <button 
          className={activeCat === 'breakfast' ? 'btn btn--active' : 'btn'}
          onClick={() => {setCategory('breakfast')}}>Breakfast</button>
        <button 
          className={activeCat === 'lunch' ? 'btn btn--active' : 'btn'}
          onClick={() => {setCategory('lunch')}}>Lunch</button>
        <button 
          className={activeCat === 'dinner' ? 'btn btn--active' : 'btn'}
          onClick={() => {setCategory('dinner')}}>Dinner</button>
      </div>
      <div className="Gallery__content">
        {portfolio.map((el) => (
          <div className="Gallery__item" key={el.id} data-cat={el.category}>
            <img src={el.pic} alt="xxx"  />
            <div className="Gallery__item__overlay">
              {el.dishName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Gallery.propTypes = {
  activeCat: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired
}

export default Gallery;