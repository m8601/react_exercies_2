import React from 'react';
import './Information.css';

const Information = () => {
  return (
    <div className="Information">
      <div className="Information__content">
        <div className="Information__info">
          <h3 className="Information__header">Adress</h3>
          <p className="Information__moreInfo">4321 California St,<br/>San Francisco, CA 12345</p>
        </div>
        <div className="Information__info">
          <h3 className="Information__header">Opening Hours</h3>
          <p className="Information__moreInfo">Mon-Thurs: 10:00 AM - 11:00 PM<br/>Fri-Sun: 11:00 AM - 02:00 AM</p>
        </div>
        <div className="Information__info">
          <h3 className="Information__header">Contact Info</h3>
          <p className="Information__moreInfo">Phone: +1 123 456 1234<br/>Email: info@company.com</p>
        </div>
      </div>
    </div>
  );
}

export default Information;