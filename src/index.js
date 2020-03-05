import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./features/counter/counterSlice";
import "./index.scss";
=======
import "./index.css";
>>>>>>> parent of 527adf3... added sass support

const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
