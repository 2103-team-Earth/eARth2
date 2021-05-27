import React, { Component } from "react";
import "../App.css";
import logo from "../assets/earthLogo.png";
import { Button, Image } from "react-bootstrap";

class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Image src={logo} alt="logo" width="200" fluid />
          <h3 style={{ margin: "0 10rem 5rem 10rem" }}>
            Welcome back to eARth. Here, you can create your very own 3D AR
            (augmented reality) models, and then use them in our AR app.
          </h3>

          <div>
            <Button style={{ margin: "2rem" }} variant="light" href="/create">
              Create New Project
            </Button>
          </div>
        </header>
      </div>
    );
  }
}

export default Welcome;
