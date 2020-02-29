import React, { Component } from "react";
import classes from "./App.module";

class App extends Component {
  state = {
    value: "this was created without using create-react-app"
  };
  render() {
    return (
      <div className={classes.align_center}>
        <button className={classes.btn}>click me</button>
      </div>
    );
  }
}
export default App;
