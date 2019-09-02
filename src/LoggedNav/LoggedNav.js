import React from "react";
import axios from "axios";

import Statistic from "../Statistic/Statistic";

export default class LoggedNav extends React.Component {
  state = { userEmail: null };

  async componentWillMount() {
    try {
      const userData = await axios({
        method: "get",
        url: "http://localhost:3001/users",
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDVkOTliMWYzOTkzOTI5M2RhZjE4OWIiLCJpYXQiOjE1NjY0MTUzMDF9.4UZJ-TQgt1hK8UM5qI_prsUuxL2W6X2wEHD7kq5478w"
        }
      });
      this.setState({ userEmail: userData.data.email });
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <div className="navbar-end">
        <div className="navbar-item">
          <Statistic />
        </div>
        <div className="navbar-item">
          <p>{this.state.userEmail}</p>
        </div>
        <div className="navbar-item">
          <div className="buttons">
            <a
              href={`${window.location.origin}/login`}
              className="button is-dark"
            >
              Wyloguj
            </a>
          </div>
        </div>
      </div>
    );
  }
}
