import { combineReducers } from 'redux';
import userDetailsReducer from './userDetailsReducer'; // Import your reducer(s)
import orderReducer from "./orderReducer"

const rootReducer = combineReducers({
  // Add your reducer(s) here
    orderReducer,
    userDetailsReducer,
});

export default rootReducer;