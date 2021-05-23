import React, { Component } from "react";
import { withRouter } from "react-router";
import firebase from "firebase";
import "firebase/firestore";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    this.props.history.push("/");
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <h1>Login</h1>

          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="email">
                <small>Email: </small>
              </label>
              <input
                name="email"
                type="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>

            <div>
              <label htmlFor="password">
                <small>Password: </small>
              </label>
              <input
                name="password"
                type="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>

            <div className="enter">
              <button className="button-large" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
