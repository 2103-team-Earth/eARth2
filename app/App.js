import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./js/redux/store";
import FullNav from "./js/FullNav";
import { UNSET } from "./js/redux/navigation";
import firebase from "firebase";

// Firebase API key is public
const firebaseConfig = {
  apiKey: "AIzaSyCycTEcCKba9eQBaKPYT05aGZl-fhyQb9c",
  authDomain: "earth-a2ce0.firebaseapp.com",
  projectId: "earth-a2ce0",
  storageBucket: "earth-a2ce0.appspot.com",
  messagingSenderId: "33112054293",
  appId: "1:33112054293:web:801afc5e9473c7ba050c1c",
  measurementId: "G-6V50YYJBS2"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
};

export default class ViroSample extends Component {
  constructor() {
    super();

    this._exitViro = this._exitViro.bind(this);
  }

  render() {
    return (
      <Provider store={store}>
        <FullNav />
      </Provider>
    );
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  // not 100% this is needed
  _exitViro() {
    this.props.setNavType(UNSET);
  }
}
