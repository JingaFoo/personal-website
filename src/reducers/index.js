import { combineReducers } from 'redux';
import SendEmailReducer from './reducerSendEmail';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  sendEmail: SendEmailReducer,
  form: formReducer
});

export default rootReducer;
