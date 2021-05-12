'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  ViroARPlaneSelector,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroAnimations,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: 'Initializing AR...',
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color='#EF476F' intensity={150} />
        <ViroDirectionalLight
          color='#EF476F'
          direction={[0.5, -1, 0.5]}
          castsShadow={true}
        />

        {/* <ViroText
          text={this.state.text}
          scale={[0.25, 0.25, 0.25]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        /> */}
        <ViroBox
          position={[0, -0.5, -1]}
          scale={[0.3, 0.3, 0.3]}
          materials={['red']}
          animation={{ name: 'rotate', run: true, loop: true }}
        />
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: 'Color?',
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

ViroMaterials.createMaterials({
  red: {
    diffuseColor: '#EF476F',
    lightingModel: 'Blinn',
  },
});

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: '+=45',
    },
    duration: 2000,
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldSceneAR;
