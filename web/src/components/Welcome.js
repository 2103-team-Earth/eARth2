import React, { Component } from "react";
import '../App.css';
import { Link } from "react-router-dom";


class Welcome extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h3>
            Welcome back to eARth, Here you can upload your very own 3D Augmented Reality(AR) models and customize them and then use them in our AR app.
          </h3>

          <p>To get started you can either create a model or upload an existing model.</p>

          <div>
            <Link to="/create">
            <button>Create</button>
            </Link>
            <p>Or</p>
            <Link to="/uploading">
            <button>Upload</button>
            </Link>
          </div>
        </header>
      </div>

    );
  }
}

export default Welcome;