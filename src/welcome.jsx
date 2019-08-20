import React, { Component } from "react";
import Home from "./home";

class Welcome extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1> Welcome {this.props.user} </h1>
        <Home />
      </div>
    );
  }
}

export default Welcome;
