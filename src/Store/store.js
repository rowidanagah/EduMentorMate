import { createStore } from 'redux';
import buttonReducer from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(buttonReducer, composeWithDevTools());

export default store;