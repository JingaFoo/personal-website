import React, { Component } from 'react';
import validator from 'validator';
import classNames from 'classnames';
import './contact.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      nameValid: false,
      emailValid: false,
      messageValid: false,
      formValid: false,
      formErrors: {name: '', email: '', message: ''}
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, () => {
      this.validateField(name, value)
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let messageValid = this.state.messageValid;

    switch(fieldName) {
      case 'message':
        messageValid = value.length >= 3;
        fieldValidationErrors.message = messageValid ? '' : ' is invalid';
        break;
      case 'name':
        nameValid = value.length >= 1;
        fieldValidationErrors.email = nameValid ? '' : ' is invalid';
        break;
      case 'email':
        emailValid = validator.isEmail(value);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      messageValid: messageValid,
      nameValid: nameValid,
      emailValid: emailValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.messageValid && this.state.nameValid && this.state.emailValid });
  }

  submitHandler(event) {
    if(this.state.formValid) {
      fetch('https://formspree.io/calvinmwariama@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: this.state.message,
          name: this.state.name,
          email: this.state.email
        }),
      });
    }
  }

  render() {
    var messageRequired = classNames({
      'required': true,
      'isValid': this.state.messageValid,
    });
    var nameRequired = classNames({
      'required': true,
      'isValid': this.state.nameValid,
    });
    var emailRequired = classNames({
      'required': true,
      'isValid': this.state.emailValid,
    });
    return (
      <div className="container d-flex align-items-center">
        <div className="row form-box">
          <form className="contact-form" method="POST" action="https://formspree.io/calvinmwariama@gmail.com">
            <div className="form-group">
              <label htmlFor="message-field">Message</label>
              <span className={messageRequired}>*</span>
              <textarea id="message-field"
                className="form-control"
                name="message"
                type="text"
                rows="6"
                cols="6"
                placeholder="Hello"
                value={this.state.message}
                onChange={this.handleUserInput} >
              </textarea>
            </div>
            <div className="form-row">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="name-field">Full name</label>
                  <span className={nameRequired}>*</span>
                  <input id="name-field"
                    className="form-control name-field"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={this.state.name}
                    onChange={this.handleUserInput} />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group ml-auto">
                  <label htmlFor="email-field">Email</label>
                  <span className={emailRequired}>*</span>
                  <input id="email-field"
                    className="form-control"
                    name="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    value={this.state.email}
                    onChange={this.handleUserInput} />
                </div>
              </div>
            </div>
            <div className="button-box d-flex justify-content-end">
              <button className="submit-button" type="submit" disabled={!this.state.formValid}>
                Send
              <i className="ion-md-send send-icon"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default ContactForm;
