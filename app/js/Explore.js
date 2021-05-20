import React, { Component } from "react";
//may need to change TouchableOpacity to TouchableHighlight
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux";
import styles from "./Stylesheet";
import { setNavigation, AR_NAVIGATOR_TYPE } from "./redux/navigation";

//dummyModels
const models = [
  {
    id: 1,
    name: "The Box",
    artist: "Frank Gallegher",
    description: "The place to be",
  },
  {
    id: 2,
    name: "The Sphere",
    artist: "Team Earth",
    description: "The best planet",
  },
  {
    id: 3,
    name: "The Sphere",
    artist: "Team Earth",
    description: "The best planet",
  },
  {
    id: 4,
    name: "The Sphere",
    artist: "Team Earth",
    description: "The best planet",
  },
  {
    id: 5,
    name: "The Sphere",
    artist: "Team Earth",
    description: "The best planet",
  },
  {
    id: 6,
    name: "The Sphere",
    artist: "Team Earth",
    description: "The best planet",
  },
  {
    id: 7,
    name: "The Sphere",
    artist: "Team Earth",
    description: "The best planet",
  },
  {
    id: 8,
    name: "The Sphere",
    artist: "Team Earth",
    description: "The best planet",
  },
  {
    id: 9,
    name: "The Sphere",
    artist: "Team Earth",
    description: "The best planet",
  },
];

export class Explore extends Component {
  constructor() {
    super();
  }
  //componentDidMount for PUBLIC models from FB

  render() {
    return (
      <View style={styles.inner}>
        <Image style={styles.tinyLogo} source={require("./res/eARth.png")} />
        <Text style={styles.titleText}>Select an Experience:</Text>
        <ScrollView>
          {models.map((model) => (
            <TouchableOpacity
              key={model.id}
              style={styles.card}
              onPress={this.props.setNavType(AR_NAVIGATOR_TYPE)}
            >
              <Text style={styles.titleText}>{model.name}</Text>
              <Text>{model.artist}</Text>
              <Text>{model.description}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapState = (state) => ({
  models: state.models,
});

const mapDispatch = (dispatch) => ({
  setNavType: (type) => dispatch(setNavigation(type)),
});

export default connect(mapState, mapDispatch)(Explore);
