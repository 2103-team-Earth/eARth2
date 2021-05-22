'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  ViroARPlaneSelector,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroSound,
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
      <ViroARScene>
        <ViroARPlaneSelector>
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
            source={require('./res/SlippingIntoDarkness.mp3')}
            loop={true}
            volume={1.0}
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
  JMB: {
    diffuseTexture: require('./res/JMB1.png'),
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

module.exports = ChooseBase;
