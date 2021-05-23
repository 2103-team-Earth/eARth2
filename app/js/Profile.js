import React, { Component } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { connect } from "react-redux";
import styles from "./Stylesheet";
import {
  setNavigation,
  AR_NAVIGATOR_TYPE,
  EXPLORE_TYPE,
} from "./redux/navigation";

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
];
export class Profile extends Component {
  constructor() {
    super();
    this.handlePress = this.handlePress.bind(this);
  }
  //componentDidMount for USERS models from FB
  handlePress() {
    console.log("We handling presses and such");

    console.log(this.props);
  }
  render() {
    return (
      <View style={styles.inner}>
        <Image style={styles.tinyLogo} source={require("./res/eARth.png")} />
        <Text style={styles.titleText}>Select to preview your projects:</Text>
        <ScrollView>
          {models.map((model) => (
            <TouchableOpacity
              key={model.id}
              style={styles.card}
              onPress={() => this.props.setNavType(AR_NAVIGATOR_TYPE)}
            >
              <Text style={styles.titleText}>{model.name}</Text>
              <Text>{model.artist}</Text>
              <Text>{model.description}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
});

export default connect(mapState, mapDispatch)(Profile);
