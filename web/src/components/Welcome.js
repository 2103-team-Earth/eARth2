import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../assets/eARTh.png";

class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <h3 style={{ margin: "0 10rem 5rem 10rem" }}>
            Welcome back to eARth. Here, you can create your very own 3D AR
            (augmented reality) models, and then use them in our AR app.
          </h3>

          <div>
            <Link to="/create">
              <button className="button-large">Create New Project</button>
            </Link>
          </div>
        </header>
      </div>
    );
  }
}

export default Welcome;
