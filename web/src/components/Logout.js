import React, { Component } from "react";
import firebase from "firebase";
import "firebase/firestore";
import { Link } from "react-router-dom";

class Logout extends Component {
  render() {
    return (
      <div className="page">
        <h4>Would you like to log out of your account?</h4>
        <Link to="/">
          <button className="button-large" type="submit" onClick={() => firebase.auth().signOut()}>
            Logout
          </button>
        </Link>
      </div>
    );
  }
}

export default Logout;
