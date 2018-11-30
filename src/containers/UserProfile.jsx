import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Auth from "../services/auth";

class UserProfile extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <h1>Hi, {Auth.user.name}</h1>
      </div>
    );
  }
}

export default UserProfile;
