import React, { Component } from "react";
import "../App.css";
import logo from "../assets/earthLogo.png";
import { Button, Image } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className="page">
        <div className="logo-ann">
          <h1>Welcome to</h1>
        </div>

        <Image src={logo} alt="logo" width="200" fluid />
        <h3 style={{ fontStyle: "italic", margin: "0 10rem" }}>
          Create your very own 3D AR (augmented reality) models, add music to
          them, and then place them in the world.
        </h3>

        <p>login or sign up for an account to start creating your projects</p>

        <div>
          <Button variant="light" href="/login">
            Login
          </Button>
          <p>Or</p>
          <Button variant="light" href="/signup">
            Signup
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
