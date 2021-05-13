import React, { Component } from 'react';
import firebase from 'firebase';
import "firebase/firestore";

class Logout extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">

      <div>
        <button type="submit" onClick={() => firebase.auth().signOut()}>Logout</button>
      </div>

      </header>
      </div>
    )
  }
}

export default Logout;
