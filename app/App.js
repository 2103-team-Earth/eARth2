import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./js/redux/store";

import FullNav from "./js/FullNav";

import { UNSET } from "./js/redux/navigation";

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
