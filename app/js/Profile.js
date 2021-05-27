import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './Stylesheet';
import {
  setNavigation,
  AR_NAVIGATOR_TYPE,
  EXPLORE_TYPE,
} from './redux/navigation';
import { setProject } from './redux/project';
import firebase from 'firebase';
import 'firebase/firestore';

export class Profile extends Component {
  constructor() {
    super();

    this.state = {
      projects: [],
    };

    this.handleProjectPress = this.handleProjectPress.bind(this);
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        this.setState({
          projects: snapshot.data().projects,
        });
      });

    this.setState({
      state: this.state,
    });
  }

  handleProjectPress(project) {
    this.props.setProject(project);
    this.props.setNavType(AR_NAVIGATOR_TYPE);
  }

  render() {
    return (
      <View style={styles.inner}>
        <Image style={styles.tinyLogo} source={require('./res/eARth.png')} />
        <Text style={styles.titleText}>My Projects</Text>
        <Text style={styles.titleText}>Select a project to render:</Text>

        {this.state.projects.length === 0 ? (
          <Text>
            You do not currently have any projects. Please visit our website to
            create a 3D model.
          </Text>
        ) : (
          <ScrollView>
            {this.state.projects.map((project) => (
              <TouchableOpacity
                key={project.id}
                style={styles.card}
                onPress={() => this.handleProjectPress(project)}
              >
                <Text>{project.name}</Text>
                <Text>View: {project.view}</Text>
                {project.shape ? <Text>Shape: {project.shape}</Text> : null}
                {project.colorSelected ? (
                  <Text>Color: {project.colorSelected}</Text>
                ) : null}
                {project.animation ? (
                  <Text>Animation: {project.animation}</Text>
                ) : null}
                {project.animate ? (
                  <Text>Animate: {project.animate}</Text>
                ) : null}
                {project.text ? <Text>Text: {project.text}</Text> : null}
                {project.textScaleX ? (
                  <Text>Text Scale X: {project.textScaleX}</Text>
                ) : null}
                {project.textScaleY ? (
                  <Text>Text Scale Y: {project.textScaleY}</Text>
                ) : null}
                {project.textScaleZ ? (
                  <Text>Text Scale Z: {project.textScaleZ}</Text>
                ) : null}
                {project.shapeScaleX ? (
                  <Text>Shape Scale X: {project.shapeScaleX}</Text>
                ) : null}
                {project.shapeScaleY ? (
                  <Text>Shape Scale Y: {project.shapeScaleY}</Text>
                ) : null}
                {project.shapeScaleZ ? (
                  <Text>Shape Scale Z: {project.shapeScaleZ}</Text>
                ) : null}
                {project.fontSize ? (
                  <Text>Font Size: {project.fontSize}</Text>
                ) : null}
                {project.textColor ? (
                  <Text>Text Color: {project.textColor}</Text>
                ) : null}
                {project.sound ? <Text>Sound: {project.sound}</Text> : null}
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}

        <TouchableHighlight
          style={styles.buttons}
          onPress={() => this.props.setNavType(EXPLORE_TYPE)}
        >
          <Text style={styles.buttonText}>Explore </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapState = (state) => ({
  navType: state.navigation.navigationType,
});

const mapDispatch = (dispatch) => ({
  setNavType: (type) => dispatch(setNavigation(type)),
  setProject: (project) => dispatch(setProject(project)),
});

export default connect(mapState, mapDispatch)(Profile);
