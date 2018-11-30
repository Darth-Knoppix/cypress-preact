import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Welcome to cypress-preact</h1>
        <h2>What is it?</h2>
        <p>An example for trying out cypress end to end testing</p>
        <h2>Where can I find out about it?</h2>
        <p><a href="https://www.cypress.io/">Learn more about Cypress</a></p>
      </div>
    );
  }
}

export default Home;
