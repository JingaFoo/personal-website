import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState.sendEmail, action) {
  switch (action.type) {
    case types.SEND_EMAIL_SUCCESS:
      return Object.assign({}, state, {
        success: action.payload
      });
    case types.SEND_EMAIL_VALIDATION:
      return Object.assign({}, state, {
        validationError: action.payload
      });
    default:
      return state
  }
}
