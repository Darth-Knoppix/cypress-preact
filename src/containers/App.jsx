import React, { Component } from "react";
import Login from "./Login";
import UserProfile from "./UserProfile";
import Home from "../components/Home";
import { BrowserRouter as Router, Route, NavLink as Link, Switch } from "react-router-dom";
import Auth from "../services/auth";

class App extends Component {
  setLoggedIn = isLoggedIn => {
    this.setState({ isLoggedIn });
  };

  render() {
    return (
      <Router>
        <div>
          <div style={{ backgroundColor: "#efefef" }}>
            <div className="container nav-container">
              <nav>
                <ul>
                  <li>
                    <Link activeClassName="active" to="/">
                      Home
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    {Auth.isLoggedIn ? (
                      <Link to="/user/profile">Profile</Link>
                    ) : (
                      <Link activeClassName="active" to="/login">
                        Login
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="container">
          <Switch>
            <Route
              path="/login"
              render={({ history }) => <Login history={history} onLogin={() => this.setLoggedIn(true)} />}
            />
            <Route path="/user/profile" render={() => <UserProfile isLoggedIn={this.state.isLoggedIn}/> } />
            <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
