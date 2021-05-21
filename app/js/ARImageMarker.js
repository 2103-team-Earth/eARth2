"use strict";

import React, { Component } from "react";
// import { connect } from "react-redux";
import { StyleSheet, TouchableHighlight, Text } from "react-native";
// import { setNavigation, PROFILE_TYPE } from "./redux/navigation";
import {
  ViroARScene,
  ViroARImageMarker,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroSound,
  ViroSphere,
  ViroMaterials,
  ViroARTrackingTargets,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroAnimations,
} from "react-viro";
// import styles from "./Stylesheet";

export default class ChooseImage extends Component {
  constructor() {
    super();
    // Set initial state here
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <ViroARScene>
        <ViroARImageMarker target={"frame"}>
          <ViroAmbientLight color="#d3d3d3" intensity={150} />
          <ViroDirectionalLight
            color="#d3d3d3"
            direction={[0.5, -1, 0.5]}
            castsShadow={true}
          />

          {/* <ViroText
          text={this.state.text}
          scale={[0.25, 0.25, 0.25]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        /> */}
          <ViroSphere
            position={[0, 0.25, -2]}
            scale={[0.3, 0.3, 0]}
            materials={["Champloo"]}
            animation={{ name: "rotate", run: true, loop: true }}
          />
          <ViroSound
            paused={false}
            muted={false}
            source={require("./res/streetsigns.mp3")}
            loop={true}
            volume={1.0}
          />
        </ViroARImageMarker>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "",
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

ViroARTrackingTargets.createTargets({
  frame: {
    source: require("./res/fsalogo.png"),
    orientation: "Up",
    physicalWidth: 0.1,
  },
});

ViroMaterials.createMaterials({
  Champloo: {
    diffuseTexture: require("./res/Champloo.png"),
    lightingModel: "Blinn",
  },
});

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateX: "+=45",
    },
    duration: 2000,
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
