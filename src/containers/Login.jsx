import React, { Component } from "react";
import Auth from "../services/auth";

class Login extends Component {
  state = {

  }

  updateEmail = e => {
    this.setState({ email: e.target.value });
  };

  updatePassword = e => {
    this.setState({ password: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();

    this.setState({ message: "" });

    if (Auth.login(this.state.email, this.state.password)) {
      this.props.onLogin();

      this.props.history.push("/user/profile");
    } else {
      this.setState({ message: "Login failed" });
    }
  };

  render() {
    const { email, password, message } = this.state;
    return (
      <form className="container" onSubmit={this.submitForm}>
        <p id="login-message">{message}</p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            accessKey="1"
            value={email}
            onChange={this.updateEmail}
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            name="password"
            id="password"
            accessKey="2"
            value={password}
            onChange={this.updatePassword}
          />
        </p>
        <input type="submit" />
      </form>
    );
  }
}

export default Login;
