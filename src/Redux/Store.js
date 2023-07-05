import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'; // Example middleware, you can use other middleware as needed
import rootReducer from './reducers'; // Import your root reducer

const store = createStore(rootReducer);

export default store;