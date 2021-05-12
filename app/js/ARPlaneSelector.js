'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroARPlaneSelector,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroSphere,
  ViroMaterials,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroAnimations,
} from 'react-viro';

export default class ChooseBase extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: 'Loading...',
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene>
        <ViroARPlaneSelector minHeight={0.5} minWidth={0.5}>
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
        </ViroARPlaneSelector>
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
  lightgrey: {
    diffuseColor: '#d3d3d3',
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

module.exports = ChooseBase;
