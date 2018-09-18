import React from 'react';
import { Parallax } from 'react-parallax';

import './Chefs.css';
import bg from './img/team-bg.jpg';
import team1 from './img/team/01.jpg';
import team2 from './img/team/02.jpg';
import team3 from './img/team/03.jpg';

const Chefs = (props) => {
  return (
    <div className="Chefs">
      <Parallax
        bgImage={bg}
        bgImageAlt="alt"
        strength={500}
      >
        <div className="Chefs__content">
          <h1>Meet our chefs</h1>
          <hr/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
          <div className="Chefs__team">
            <div className="Chefs__teamMember">
              <div className="Chefs__img">
                <img src={team1} alt="Joe Doe"/>
              </div>
              <h3 className="Chefs__name">Joe Doe</h3>
              <p className="Chefs__about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, harum?</p>
            </div>
            <div className="Chefs__teamMember">
              <div className="Chefs__img">
                <img src={team2} alt="Joe Doe"/>
              </div>
              <h3 className="Chefs__name">Joe Doe</h3>
              <p className="Chefs__about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, harum?</p>
            </div>
            <div className="Chefs__teamMember">
              <div className="Chefs__img">
                <img src={team3} alt="Joe Doe"/>
              </div>
              <h3 className="Chefs__name">Joe Doe</h3>
              <p className="Chefs__about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, harum?</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Chefs;