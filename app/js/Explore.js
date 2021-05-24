import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import styles from "./Stylesheet";
import {
  setNavigation,
  // AR_NAVIGATOR_TYPE,
  PROFILE_TYPE,
} from "./redux/navigation";
import firebase from 'firebase';
import 'firebase/firestore';

export class Explore extends Component {
  constructor() {
    super();

    this.state = {
      projects: []
    };

    this.handlePress = this.handlePress.bind(this);
  }

  componentDidMount() {
    firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        this.setState({
          projects: snapshot.data().projects
        });
      });

    this.setState({
      state: this.state
    });
  }

  handlePress() {
    console.log("We handling presses and such");

    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.inner}>
        <Image style={styles.tinyLogo} source={require("./res/eARth.png")} />
        <Text style={styles.titleText}>All Projects</Text>
        <Text style={styles.titleText}>Explore projects from all users:</Text>

        {
          this.state.projects.length === 0
          ?
          <Text>There are currently no projects.</Text>
          :
          <ScrollView>
            {this.state.projects.map((project) => (
              <TouchableOpacity
                key={project.id}
                style={styles.card}
                // onPress={() => this.props.setNavType(AR_NAVIGATOR_TYPE)}
              >
                <Text>{project.name}</Text>
                <Text>View: {project.view}</Text>
                {project.shape ? <Text>Shape: {project.shape}</Text> : null}
                {project.colorSelected ? <Text>Color: {project.colorSelected}</Text> : null}
                {project.animation ? <Text>Animation: {project.animation}</Text> : null}
                {project.animate ? <Text>Animate: {project.animate}</Text> : null}
                {project.text ? <Text>Text: {project.text}</Text> : null}
                {project.textScaleX ? <Text>Text Scale X: {project.textScaleX}</Text> : null}
                {project.textScaleY ? <Text>Text Scale Y: {project.textScaleY}</Text> : null}
                {project.textScaleZ ? <Text>Text Scale Z: {project.textScaleZ}</Text> : null}
                {project.shapeScaleX ? <Text>Shape Scale X: {project.shapeScaleX}</Text> : null}
                {project.shapeScaleY ? <Text>Shape Scale Y: {project.shapeScaleY}</Text> : null}
                {project.shapeScaleZ ? <Text>Shape Scale Z: {project.shapeScaleZ}</Text> : null}
                {project.fontSize ? <Text>Font Size: {project.fontSize}</Text> : null}
                {project.textColor ? <Text>Text Color: {project.textColor}</Text> : null}
                {project.sound ? <Text>Sound: {project.sound}</Text> : null}
              </TouchableOpacity>
            ))}
          </ScrollView>
        }

        <TouchableHighlight
          style={styles.buttons}
          onPress={() => this.props.setNavType(PROFILE_TYPE)}
        >
          <Text style={styles.buttonText}>Profile</Text>
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
});

export default connect(mapState, mapDispatch)(Explore);
