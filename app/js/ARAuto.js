'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  preloadSounds,
  ViroSound,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroSphere,
  ViroMaterials,
  ViroAmbientLight,
  ViroDirectionalLight,
  ViroAnimations,
} from 'react-viro';
import { connect } from "react-redux";

class ARAuto extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: 'Initializing AR...',
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  componentDidMount() {
    const { project } = this.props;

    this.myColorKey = `myColor ${Date.now()}`;
    this.myTextureKey = `myTexture ${Date.now()}`;
    ViroMaterials.createMaterials({
      [this.myColorKey]: {
        diffuseColor: project.color,
        lightingModel: 'Blinn',
      },
      [this.myTextureKey]: {
        diffuseTexture: require(project.texture),
        lightingModel: 'Blinn',
      },
    });
  }

  render() {
    const { project } = this.props;

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
          scale={[project.textScaleX, project.textScaleY, project.textScaleZ]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />
        {project.shape.cube ? (
          <ViroBox
            position={[0, -0.5, -1]}
            scale={[
              project.shapeScaleX,
              project.shapeScaleY,
              project.shapeScaleZ,
            ]}
            materials={project.color ? this.myColorKey : this.myTextureKey}
            animation={{ name: project.animation, run: true, loop: true }}
          />
        ) : (
          <ViroSphere
            position={[0, -0.5, -1]}
            scale={[
              project.shapeScaleX,
              project.shapeScaleY,
              project.shapeScaleZ,
            ]}
            materials={project.color ? this.myColorKey : this.myTextureKey}
            animation={{ name: project.animation, run: true, loop: true }}
          />
        )}
        <ViroSound
          paused={false}
          muted={false}
          // if audioUrl isn't working will have to use project.sound as source for audio files
          source={'takashiSoundTest'}
          loop={true}
          // onError={(error) => {
          //   console.log(error);
          // }}
          volume={1.0}
        />
      </ViroARScene>
    );

  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: project.text,
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

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

const mapState = (state) => ({
  project: state.project,
});

// module.exports = ARAuto;

export default connect(mapState)(ARAuto);
