import React from 'react';
import './App.css';
import './Contact.css';


const Contact = (props) => {
  return (
    <div className="Contact">
      <h2 className="Section__header">Contact form</h2>
      <hr/>
      <p className="Section__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos necessitatibus rerum laudantium, dolorum corporis consequuntur.</p>
      <div className="ContactForm">
        <div className="ContactForm__group">
          <div className="ContactForm__column">
            <input placeholder="Name" name="name" type="text"/>
          </div>
          <div className="ContactForm__column">
            <input placeholder="Email" name="email" type="email"/>
          </div>
        </div>
        <textarea name="message" placeholder="Message" cols="30" rows="10"></textarea>
        <button className="btn Contact__btn">Send Message</button>
      </div>
    </div>
  );
}

export default Contact;