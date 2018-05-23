import axios from 'axios';
import { SubmissionError } from 'redux-form';
import * as types from '../actionTypes';
import swal from 'sweetalert';

export function sendEmail(values) {
  if (!values.message) {
   swal("Empty message!", "Please enter a message", "error");

   return (dispatch) => {
     dispatch({ type: types.SEND_EMAIL_VALIDATION, payload: 'Enter a valid email address'});
   }
 } else if(!values.name) {
    swal("Invalid name!", "Please enter a name", "error");

    return (dispatch) => {
      dispatch({ type: types.SEND_EMAIL_VALIDATION, payload: 'Enter name'});
    }

  } else if(!values.email) {
    swal("Invalid email!", "Please enter a valid email address", "error");

    return (dispatch) => {
      dispatch({ type: types.SEND_EMAIL_VALIDATION, payload: 'Enter a valid email address'});
    }
  } else {
    const request = axios.post('https://formspree.io/calvinmwariama@gmail.com', values);
    return (dispatch) => {
      request.then(response => {
        console.log(response);
        dispatch({ type: types.SEND_EMAIL_SUCCESS, payload: 'Success'});
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}
