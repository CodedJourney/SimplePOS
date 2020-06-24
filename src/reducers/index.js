// Import Files
import { combineReducers } from 'redux';

import authReducer from '../reducers/authReducer';
import inventoryReducer from '../reducers/inventoryReducer';
import orderReducer from '../reducers/orderReducer';

export default combineReducers({
  auth: authReducer,
  inventory: inventoryReducer,
  orders: orderReducer
});