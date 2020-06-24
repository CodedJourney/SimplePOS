// Import Files
import {
  SIGN_IN,
  SIGN_OUT,
  REGISTER,
  AUTH_ERROR
} from '../actions/types';

const initialState = {
  authenticated: false,
  errorMessage: '',
  userInfo: []
};

// Handles the authentication part of the redux store
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, userInfo: action.payload, authenticated: true };
    case SIGN_OUT:
      return { ...state, userInfo: action.payload, authenticated: false };
    case REGISTER:
      return { ...state, authenitcated: true, userInfo: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};