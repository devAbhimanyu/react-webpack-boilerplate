import React, { Component } from "react";
import { connect } from "react-redux";
// import { increment, decrement } from "../features/counter/counter";
import { increment, decrement } from "../features/counter/counterSlice";
import { Box, Card, Heading, Button, Flex } from "rebass";

class App extends Component {
  render() {
    return <h1>{this.state.value}</h1>;
  }
}

const mapStateToProps = state => ({
  value: state.value
});

const mapDispatchToProps = { increment, decrement };
export default connect(mapStateToProps, mapDispatchToProps)(App);
