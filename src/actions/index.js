// Importing Files
import axios from 'axios';

import BrowserHistory from '../BrowserHistory';

import {
  SIGN_IN,
  REGISTER,
  SIGN_OUT,
  AUTH_ERROR,
  PLACE_ORDER,
  COMPLETE_ORDER,
  REMOVE_ORDER,
  ORDER_ERROR,
  ADD_INVENTORY_ITEM,
  REMOVE_INVENTORY_ITEM,
  INVENTORY_ERROR
} from './types';

// Authentication
// Sign into account
export const signin = (formValues) => async (dispatch) => {
  try {
    // Making async request to server
    const response = await axios.post("http://localhost:3090/signin", formValues);
    dispatch({ type: SIGN_IN, payload: response.data._doc });
    localStorage.setItem('token', response.data.token);
    BrowserHistory.push('/');
  } catch (e) {
    // Runs if server failed to respond
    dispatch({ type: AUTH_ERROR, payload: "Invalid Credentials" });
  }
}

// Register action that makes a post request to add a user into the database
export const register = (formValues, callback) => async (dispatch) => {
  try {
    // Making an async response to register the user into the database
    const response = await axios.post('http://localhost:3090/register', formValues);
    dispatch({ type: REGISTER, payload: response.data });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    // Runs this code is the user cannot be created
    dispatch({ type: AUTH_ERROR, payload: "Invalid Credentials" });
  }
};

// Signout action that simply signs the user out of the current account
export const signout = () => {
  return {
    type: SIGN_OUT,
    payload: []
  };
};

// Inventory
// Adding item to the inventory
export const addInventoryItem = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3090/add-inventory-item', formValues);
    console.log(response);
    dispatch({ type: ADD_INVENTORY_ITEM, payload: response.data });
    callback();
  } catch (e) {
    console.log(e);
    dispatch({ type: INVENTORY_ERROR, payload: "Unable to add item to inventory" });
  }
};

// Removing item from the inventory
export const removeInventoryItem = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3090/remove-inventory-item', formValues);
    console.log(response);
    dispatch({ type: REMOVE_INVENTORY_ITEM, payload: 'Removed item from inventory' });
    callback();
  } catch (e) {
    console.log(e);
    dispatch({ type: INVENTORY_ERROR, payload: "Unable to remove item from inventory" });
  }
};

// Orders
// Placing an Order
export const placeOrder = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3090/place-order', formValues);
    console.log(response);
    dispatch({ type: PLACE_ORDER, payload: 'Your order has been placed' });
    callback();
  } catch (e) {
    console.log(e);
    dispatch({ type: ORDER_ERROR, payload: 'Could not place your order' });
  }
};

// Completing an order
export const completeOrder = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3090/complete-order', formValues);
    console.log(response);
    dispatch({ type: COMPLETE_ORDER, payload: 'Order completed' });
    callback();
  } catch (e) {
    console.log(e);
    dispatch({ type: ORDER_ERROR, payload: 'Order could not be completed' });
  }
};

// Removing an order
export const removeOrder = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3090/remove-order', formValues);
    console.log(response);
    dispatch({ type: REMOVE_ORDER, payload: 'Order removed' });
    callback();
  } catch (e) {
    console.log(e);
    dispatch({ type: ORDER_ERROR, payload: 'Could not remove order' });
  }
};