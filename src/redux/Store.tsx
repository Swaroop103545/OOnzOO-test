// store/index.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // For async actions, if needed
import productReducer from './reducers/productReducer'; // Import your root reducer

const store = createStore(
  productReducer,
  applyMiddleware(thunk)
);

export default store;
