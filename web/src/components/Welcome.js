import React, { Component } from "react";
import '../App.css';
import { Link } from "react-router-dom";


class Welcome extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">

          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h3 style={{margin: "0 10rem 5rem 10rem"}}>
            Welcome back to eARth. Here, you can create your very own 3D AR (augmented reality) models, and then use them in our AR app.
          </h3>

          {/* <p>To get started you can either create a model or upload an existing model.</p> */}

          <div>
            <Link to="/create">
            <button>Create New Project</button>
            </Link>

            {/* <p>Or</p>

            <Link to="/upload">
            <button>Upload</button>
            </Link> */}
          </div>
        </header>
      </div>

    );
  }
}

export default Welcome;
