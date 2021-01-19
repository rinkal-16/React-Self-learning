import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import postReducer from './reducers/postReducer';
import cartReducer from './reducers/cartReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk" 
        
const store = createStore(cartReducer, applyMiddleware(thunk));
// const store = createStore(postReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


