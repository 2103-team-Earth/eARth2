'use strict';

import React, { Component } from 'react';
// import { connect } from "react-redux";
import { StyleSheet, TouchableHighlight, Text } from 'react-native';
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
} from 'react-viro';
// import styles from "./Stylesheet";

export default class ChooseImage extends Component {
  constructor() {
    super();
    // Set initial state here
    this.state = {
      text: '',
    };
  }

  render() {
    const { project } = this.props;
    return (
      <ViroARScene>
        <ViroARImageMarker target={'frame'}>
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
            source={require('./res/streetsigns.mp3')}
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
        text: 'Champloo',
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

ViroARTrackingTargets.createTargets({
  frame: {
    source: require('./res/fsalogo.png'),
    orientation: 'Up',
    physicalWidth: 0.1,
  },
});

ViroMaterials.createMaterials({
  Champloo: {
    diffuseTexture: require('./res/Champloo.png'),
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

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
