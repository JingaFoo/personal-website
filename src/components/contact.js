import React from 'react';
import ContactForm from './contact_form';

const Contact = () => {
  return (
    <section className="section-introduction">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron introduction-jumbo">
              <h1 className="display-4">Feel free to contact me</h1>
              <hr className="my-4" />
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
