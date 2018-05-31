import React from 'react';

import './contact.css';

const ContactForm = () => {
  return (
    <div className="container d-flex align-items-center">
      <div className="row form-box">
        <div>
          <form className="contact-form" method="POST" action="https://formspree.io/calvinmwariama@gmail.com">
            <div className="form-group">
              <textarea className="form-control"
                name="message"
                type="text"
                rows="6"
                cols="6"
                placeholder="What's up!">
              </textarea>
            </div>
            <div className="form-row">
              <div className="col-6">
                <div className="form-group">
                  <input id="name-field"
                    className="form-control name-field"
                    name="name"
                    type="text"
                    placeholder="John Doe" />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group ml-auto">
                  <input className="form-control"
                    name="email"
                    type="email"
                    placeholder="johndoe@example.com" />
                </div>
              </div>
            </div>
            <div className="button-box d-flex justify-content-end">
              <button className="submit-button" type="submit">
              Send
              <i className="ion-md-send send-icon"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
