// Importing Files
import {
  ADD_INVENTORY_ITEM,
  REMOVE_INVENTORY_ITEM,
  INVENTORY_ERROR,
  GET_INVENTORY
} from '../actions/types';

const initialState = {
  inventory: [],
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVENTORY_ITEM:
      return { ...state, inventory: action.payload };
    case REMOVE_INVENTORY_ITEM:
      return { ...state, inventory: action.payload };
    case GET_INVENTORY:
      return { ...state, inventory: action.payload };
    case INVENTORY_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}