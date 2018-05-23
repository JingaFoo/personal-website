import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { sendEmail } from '../actions/contact/actionContact';
import { withRouter } from 'react-router-dom';

import './contact.css';

class Contact extends Component {

  renderNameField(field) {
    return(
      <div className="form-group">
        <input id="name-field"
          className="form-control name-field"
          type="text"
          placeholder="John Doe"
          {...field.input} />
      </div>
    );
  }

  renderEmailField(field) {
    return(
      <div className="form-group ml-auto">
        <input className="form-control"
          type="email"
          placeholder="johndoe@example.com"
          {...field.input} />
      </div>
    );
  }

  renderMessageField(field) {
    return(
      <div className="form-group">
        <textarea className="form-control"
          type="text"
          rows="6"
          cols="6"
          placeholder="What's up!"
          {...field.input} >
        </textarea>
      </div>
    );
  }

  onSubmit(values) {
    this.props.sendEmail(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <section className="section-introduction">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="jumbotron introduction-jumbo">
                <h1 className="display-4">Feel free to drop a what&#39;s up!</h1>
                <hr className="my-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex align-items-center">
          <div className="row form-box">
            <div className="col-12">
              <form className="contact-form" method="POST" action="https://formspree.io/calvinmwariama@gmail.com">
                <Field label="Message" name="message" component={this.renderMessageField} />
                <div className="form-row">
                  <div className="col-6">
                    <Field label="Name" name="name" component={this.renderNameField} />
                  </div>
                  <div className="col-6">
                    <Field label="Email" name="email" component={this.renderEmailField} />
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
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    sendEmailSuccess: state.sendEmail.success
  };
}

export default withRouter(reduxForm({
  form: 'ContactForm'
})(connect(mapStateToProps, {
  sendEmail, })(Contact)));
