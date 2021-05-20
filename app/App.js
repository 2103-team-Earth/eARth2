import React, { Component } from "react";
import { ViroARSceneNavigator } from "react-viro";
import { Provider, connect } from "react-redux";
import store from "./js/redux/store";

//components
import Login from "./js/Login";
import Profile from "./js/Profile";
import Explore from "./js/Explore";
import ARNav from "./js/ARNav";
import ARAuto from "./js/ARAuto";
import ARPlanSelector from "./js/ARPlaneSelector";
import ARImageMarker from "./js/ARImageMarker";
//nav types
import {
  UNSET,
  LOGIN_TYPE,
  PROFILE_TYPE,
  EXPLORE_TYPE,
  AR_NAVIGATOR_TYPE,
  AUTO_AR,
  AR_PLANE_SELECTOR,
  AR_IMAGE_MARKER,
} from "./js/redux/navigation";

export class ViroSample extends Component {
  constructor() {
    super();

    this._exitViro = this._exitViro.bind(this);
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.

  //switch this.props.nav
  render() {
    switch (this.props.nav) {
      case PROFILE_TYPE:
        return (
          <Provider store={store}>
            <Profile />
          </Provider>
        );
      case EXPLORE_TYPE:
        return (
          <Provider store={store}>
            <Explore />
          </Provider>
        );
      case AR_NAVIGATOR_TYPE:
        return (
          <Provider store={store}>
            <ARNav />
          </Provider>
        );
      case AUTO_AR:
        return (
          <Provider store={store}>
            <ViroARSceneNavigator initialScene={{ scene: ARAuto }} />
          </Provider>
        );
      case AR_PLANE_SELECTOR:
        return (
          <Provider store={store}>
            <ViroARSceneNavigator initialScene={{ scene: ARPlanSelector }} />
          </Provider>
        );
      case AR_IMAGE_MARKER:
        return (
          <Provider store={store}>
            <ViroARSceneNavigator initialScene={{ scene: ARImageMarker }} />
          </Provider>
        );
      default:
        return (
          <Provider store={store}>
            <Profile />
          </Provider>
        );
    }
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.props.setNavType(UNSET);
  }
}

const mapState = (state) => ({
  navType: state.navigation.navigationType,
});

const mapDispatch = (dispatch) => ({
  setNavType: (type) => dispatch(setNavigation(type)),
});

export default connect(mapState, mapDispatch)(ViroSample);
