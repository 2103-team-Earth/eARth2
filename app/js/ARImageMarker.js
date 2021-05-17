'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroARImageMarker,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroSphere,
  ViroMaterials,
  ViroARTrackingTargets,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroAnimations,
} from 'react-viro';

export default class ChooseImage extends Component {
  constructor() {
    super();
    // Set initial state here
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <ViroARScene>
        <ViroARImageMarker target={'frame'}>
          <ViroAmbientLight color='#d3d3d3' intensity={150} />
          <ViroDirectionalLight
            color='#d3d3d3'
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
            position={[0, -0.5, -1]}
            scale={[0.3, 0.3, 0.3]}
            materials={['lightgrey']}
            animation={{ name: 'rotate', run: true, loop: true }}
          />
        </ViroARImageMarker>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: '',
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

ViroARTrackingTargets.createTargets({
  frame: {
    source: require('./res/test1.png'),
    orientation: 'Up',
    physicalWidth: 0.1,
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

module.exports = ChooseImage;
