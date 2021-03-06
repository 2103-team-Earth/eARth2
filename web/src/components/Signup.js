import React, { Component } from "react";
import { withRouter } from "react-router";
import firebase from "firebase";
import "firebase/firestore";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
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

    const { username, email, password } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            username,
            email,
            projects: [],
          });
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
          <h1>Sign Up</h1>

          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="username">
                <small>Username: </small>
              </label>
              <input
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
            </div>

            <div>
              <label htmlFor="email">
                <small>Email: </small>
              </label>
              <input
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>

            <OverlayTrigger
              trigger="focus"
              placement="top"
              overlay={
                <Popover id={"popover - positioned - top"}>
                  <Popover.Title as="h4">Pro Tip:</Popover.Title>
                  <Popover.Content>
                    Please ensure that your password is at least{" "}
                    <strong>6</strong> characters in length and includes at
                    least one letter and number
                  </Popover.Content>
                </Popover>
              }
            >
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
            </OverlayTrigger>

            <div className="enter">
              <Button variant="light" type="submit">
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
