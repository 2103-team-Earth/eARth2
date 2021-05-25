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

export default class ARTesting extends Component {
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
    console.dir(ViroSound);
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroAmbientLight color='#ffffff' intensity={150} />
        <ViroDirectionalLight
          color='#ffffff'
          direction={[0.5, -1, 0.5]}
          castsShadow={true}
        />
        <ViroText
          text={this.state.text}
          scale={[0.25, 0.25, 0.25]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />

        <ViroBox
          position={[0, -0.5, -1]}
          scale={[0.3, 0.3, 0.3]}
          materials={'takashi'}
          animation={{ name: 'jump', run: true, loop: true }}
        />
        <ViroSound
          paused={false}
          muted={false}
          source={'takashiSoundTest'}
          // onError={(error) => {
          //   console.log(error);
          // }}
          loop={true}
          volume={1.0}
        />
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
  spin: {
    properties: {
      rotateY: '+=45',
    },
    duration: 2000,
  },
  forward: {
    properties: {
      rotateX: '+=45',
    },
    duration: 2000,
  },
  backward: {
    properties: {
      rotateX: '-=45',
    },
    duration: 2000,
  },
  frontFlip: {
    properties: {
      rotateX: '+=360',
    },
    easing: 'EaseInEaseOut',
    duration: 1000,
  },
  sit: {
    properties: {
      positionY: -0.5,
    },
    duration: 1000,
  },
  jumpUp: {
    properties: {
      positionY: '+=1',
    },
    duration: 1000,
  },
  delayAnimation: {
    delay: 4000,
  },
  jump: [['sit', 'jumpUp', 'sit'], ['delayAnimation']],
  flip: [['frontFlip'], ['delayAnimation']],
});

ViroSound.preloadSounds({
  takashiSoundTest:
    'https://firebasestorage.googleapis.com/v0/b/earth-a2ce0.appspot.com/o/sounds%2FLong%20Distance%20Groove%20-%20Blue%20-%2003%20Indigo.mp3?alt=media&lol=.mp3',
  takashiWorking: 'http://www.kozco.com/tech/32.mp3',
}).then(console.log);

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = ARTesting;
