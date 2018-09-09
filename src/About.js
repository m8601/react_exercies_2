import React from 'react';

import './About.css';
import aboutImg from './img/about.jpg';

const About = (props) => {
  return (
    <div className="About">
      <div className="About__img">
        <img src={aboutImg} alt="Our restaurant"/>
      </div>
      <div className="About__info">
        <h2>our restaurant</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
        <span>Awarded Chefs</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
      </div>
    </div>
  );
}

export default About;