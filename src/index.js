import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import "./index.css";

const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
