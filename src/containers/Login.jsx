import { h, Component } from "preact";
import { route } from "preact-router";
import Auth from "../services/auth";

class Login extends Component {
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

      route("/user/profile", true);
    } else {
      this.setState({ message: "Login failed" });
    }
  };

  render({}, { email, password, message }) {
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
            accesskey="1"
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
            accesskey="2"
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
