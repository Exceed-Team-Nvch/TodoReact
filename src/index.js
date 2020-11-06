import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./style.css";
import App from "./App";
import { Provider } from 'react-redux'
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  combineReducer  from './reducers/index'

 

export const store = createStore( combineReducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
