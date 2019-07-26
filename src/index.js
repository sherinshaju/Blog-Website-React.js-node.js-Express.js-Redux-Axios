import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

let Datastore = {
  isLoggedIn: false,
  blogData: []
};

function counter(state = Datastore, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLoggedIn: action.payload
      };
    case "logout":
      return {
        ...state,
        isLoggedIn: action.payload
      };
    case "blogData":
      return {
        ...state,
        blogData: action.payload
      };
    default:
      return state;
  }
}

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));
console.log(store.getState());

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
