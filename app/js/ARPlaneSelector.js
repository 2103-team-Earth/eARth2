'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  ViroARScene,
  ViroARPlaneSelector,
  preloadSounds,
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

// converts model scales data type from string to integer
function convertToNumber(string) {
  return parseFloat(string, 10);
}

export class ChooseBase extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: 'Loading...',
    };

    // bind 'this' to functions
    this.myColorKey = `myColor${Date.now().toString().slice(-3)}`;
    this.myTextureKey = `myTexture${Date.now().toString().slice(-3)}`;
    this.mySoundKey = `mySound${Date.now().toString().slice(-3)}`;
    this._onInitialized = this._onInitialized.bind(this);
  }

  componentDidMount() {
    const { project } = this.props;

    if (project.colorSelected) {
      ViroMaterials.createMaterials({
        [this.myColorKey]: {
          diffuseColor: project.colorSelected,
          lightingModel: 'Blinn',
        },
      });
    } else {
      ViroMaterials.createMaterials({
        [this.myTextureKey]: {
          diffuseTexture: {
            uri: project.material,
          },
          lightingModel: 'Blinn',
        },
      });
    }
    if (project.sound) {
      ViroSound.preloadSounds({
        [this.mySoundKey]: project.sound,
      });
    }

    // console.log(JSON.stringify(project, null, 4));
    //
    // this.myTextureKey = `myTexture ${Date.now()}`;
    // if (project.colorSelected) {
    //   ViroMaterials.createMaterials({
    //     [this.myColorKey]: {
    //       diffuseColor: '#eac07a',
    //       lightingModel: 'Blinn',
    //     },
    //   });
    // } else {
    //   ViroMaterials.createMaterials({
    //     [this.myTextureKey]: {
    //       diffuseTexture: project.diffuseTexture,
    //       lightingModel: 'Blinn',
    //     },
    //   });
    // }
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
          {project.text ? (
            <ViroText
              text={this.state.text}
              scale={[
                0.25, 0.25, 0.25,
                // convertToNumber(project.textScaleX),
                // convertToNumber(project.textScaleY),
                // convertToNumber(project.textScaleZ),
              ]}
              position={[0, 0, -1]}
              style={styles.helloWorldTextStyle}
            />
          ) : null}
          {project.shape === 'cube' ? (
            <ViroBox
              position={[0, -0.5, -1]}
              scale={[
                convertToNumber(project.shapeScaleX),
                convertToNumber(project.shapeScaleY),
                convertToNumber(project.shapeScaleZ),
              ]}
              materials={[
                project.colorOrTexture === 'color'
                  ? this.myColorKey
                  : this.myTextureKey,
              ]}
              animation={{ name: project.animate, run: true, loop: true }}
            />
          ) : (
            <ViroSphere
              position={[0, -0.5, -1]}
              scale={[
                convertToNumber(project.shapeScaleX),
                convertToNumber(project.shapeScaleY),
                convertToNumber(project.shapeScaleZ),
              ]}
              materials={[
                project.colorOrTexture === 'color'
                  ? this.myColorKey
                  : this.myTextureKey,
              ]}
              animation={{
                name: project.animate,
                run: true,
                loop: true,
              }}
            />
          )}
          <ViroSound
            paused={false}
            muted={false}
            // if audioUrl isn't working will have to use project.sound as source for audio files
            source={this.mySoundKey}
            loop={true}
            // onError={(error) => {
            //   console.log(error);
            // }}
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

const mapState = (state) => ({
  project: state.project,
});

// module.exports = ChooseBase;

export default connect(mapState)(ChooseBase);
