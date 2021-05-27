import React, { Component } from "react";
import firebase from "firebase";
import "firebase/firestore";
import logo from "../assets/earthLogo.png";
import { Button, Image } from "react-bootstrap";

class Logout extends Component {
  render() {
    return (
      <div className="page">
        <Image src={logo} alt="logo" width="200" fluid />
        <h4>Would you like to log out of your account?</h4>

        <Button
          variant="light"
          type="submit"
          href="/"
          onClick={() => firebase.auth().signOut()}
        >
          Logout
        </Button>
      </div>
    );
  }
}

export default Logout;
