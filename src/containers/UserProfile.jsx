import { h, Component } from "preact";
import Auth from "../services/auth";

class UserProfile extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hi, {Auth.user.name}</h1>
      </div>
    );
  }
}

export default UserProfile;
