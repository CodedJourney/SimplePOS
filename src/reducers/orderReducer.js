// Importing Files
import {
  PLACE_ORDER,
  REMOVE_ORDER,
  COMPLETE_ORDER,
  ORDER_ERROR
} from '../actions/types';

const initialState = {
  order: {},
  errorMessage: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return { ...state, order: action.payload };
    case REMOVE_ORDER:
      return { ...state, order: action.payload };
    case COMPLETE_ORDER:
      return { ...state, order: action.payload };
    case ORDER_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
