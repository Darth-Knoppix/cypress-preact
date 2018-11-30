import { h, Component } from "preact";
import Login from "./Login";
import UserProfile from "./UserProfile";
import Home from "../components/Home";
import { Router, route } from "preact-router";
import { Link } from "preact-router/match";
import Auth from "../services/auth";

class App extends Component {
  routeChange = e => {
    if (e.url.startsWith("/user/")) {
      if (!this.state.isLoggedIn) route("/", true);
    }
  };

  setLoggedIn = (isLoggedIn) => {
    this.setState({ isLoggedIn });
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: "#efefef" }}>
          <div className="container nav-container">
            <nav>
              <ul>
                <li>
                  <Link activeClassName="active" href="/">
                    Home
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  {Auth.isLoggedIn ? (
                    <Link href="/user/profile">Profile</Link>
                  ) : (
                    <Link activeClassName="active" href="/login">
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="container">
          <Router onChange={this.routeChange}>
            <Home path="/" />
            <Login path="/login" onLogin={() => this.setLoggedIn(true)} />
            <UserProfile path="/user/profile" />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
