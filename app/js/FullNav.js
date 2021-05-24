import React, { Component } from "react";
import { ViroARSceneNavigator } from "react-viro";
import { connect } from "react-redux";



//components
import Login from "./Login";
import Profile from "./Profile";
import Explore from "./Explore";
import ARNav from "./ARNav";
import ARAuto from "./ARAuto";
// import ARPlanSelector from "./ARPlaneSelector";
// import ARImageMarker from "./ARImageMarker";

//nav types
import {
  PROFILE_TYPE,
  EXPLORE_TYPE,
  AR_NAVIGATOR_TYPE,
  AUTO_AR,
  // AR_PLANE_SELECTOR,
  // AR_IMAGE_MARKER,
} from "./redux/navigation";

export class FullNav extends Component {
  render() {
    switch (this.props.navType) {
      case PROFILE_TYPE:
        return <Profile />;
      case EXPLORE_TYPE:
        return <Explore />;
      case AR_NAVIGATOR_TYPE:
        return <ARNav />;
      case AUTO_AR:
        return <ViroARSceneNavigator initialScene={{ scene: ARAuto }} />;
      // case AR_PLANE_SELECTOR:
      //   return (
      //     <ViroARSceneNavigator initialScene={{ scene: ARPlanSelector }} />
      //   );
      // case AR_IMAGE_MARKER:
      //   return <ViroARSceneNavigator initialScene={{ scene: ARImageMarker }} />;
      default:
        return <Login />;
    }
  }
}

const mapState = (state) => ({
  navType: state.navigation.navigationType,
});

export default connect(mapState)(FullNav);
