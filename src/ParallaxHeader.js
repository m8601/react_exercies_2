import React from 'react';
import './MenuHeader.css';
import { Parallax } from 'react-parallax';



const ParallaxHeader = ({bg, title}) => {
  return (
    <div className="MenuHeader">
      <Parallax
        bgImage={bg}
        bgImageAlt="alt"
        strength={700}
      >
        <div className="MenuHeader__content">
          <h1>{title}</h1>
          <hr/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
        </div>
      </Parallax>
    </div>
  );
}

export default ParallaxHeader;