'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  ViroNode,
  ViroARPlaneSelector,
  preloadSounds,
  ViroSound,
  ViroSpatialSound,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroSphere,
  ViroMaterials,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroAnimations,
} from 'react-viro';

export default class ARAuto extends Component {
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
    const { projects } = this.props;
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color={projects.color} intensity={150} />
        <ViroDirectionalLight
          color={projects.color}
          direction={[0.5, -1, 0.5]}
          castsShadow={true}
        />
        <ViroText
          text={this.state.text}
          scale={[
            projects.textScaleX,
            projects.textScaleY,
            projects.textScaleZ,
          ]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />
        {projects.shape.cube ? (
          <ViroBox
            position={[0, -0.5, -1]}
            scale={[
              projects.shapeScaleX,
              projects.shapeScaleY,
              projects.shapeScaleZ,
            ]}
            materials={'takashi'}
            animation={{ name: 'rotate', run: true, loop: true }}
          />
        ) : (
          <ViroSphere
            position={[0, -0.5, -1]}
            scale={[
              projects.shapeScaleX,
              projects.shapeScaleY,
              projects.shapeScaleZ,
            ]}
            materials={'takashi'}
            animation={{ name: 'rotate', run: true, loop: true }}
          />
        )}
        {/* <ViroBox
          position={[0, -0.5, -1]}
          scale={[0.3, 0.3, 0.3]}
          materials={'takashi'}
          animation={{ name: 'rotate', run: true, loop: true }}
        /> */}
        <ViroSound
          paused={false}
          muted={false}
          source={'takashiSoundTest'}
          loop={true}
          // onError={console.error(ViroSound)}
          volume={1.0}
        />
        {/* <ViroSpatialSound
          rolloffModel='linear'
          paused={false}
          muted={false}
          minDistance={2}
          maxDistance={5}
          position={[0, -0.5, -1]}
          source={'https://soundcloud.com/loosethakid/saturdaymorningcartoons'}
          loop={true}
          volume={1.0}
        /> */}
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

ViroMaterials.createMaterials({
  takashi: {
    diffuseTexture: require('./res/takashiZen2.png'),
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

ViroSound.preloadSounds({
  takashiSoundTest:
    'https://firebasestorage.googleapis.com/v0/b/earth-a2ce0.appspot.com/o/sounds%2FLong%20Distance%20Groove%20-%20Blue%20-%2003%20Indigo.mp3?alt=media',
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

module.exports = ARAuto;
