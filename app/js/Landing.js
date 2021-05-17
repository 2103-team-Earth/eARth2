import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  ScrollView,
} from "react-native";
import { ViroARSceneNavigator } from "react-viro";

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
export default class AppLanding extends Component {
  constructor() {
    super();
    this.state = {
        models: [],
        selected:{},
    };
    this.handlePress = this.handlePress.bind(this);
  }
//componentDidMount 
  handlePress(){
    this.state.selected = 
  }

  render() {
    return (
      <View style={styles.inner}>
        <Image style={styles.tinyLogo} source={require("./res/eARth.png")} />
        <Text style={styles.titleText}>Select an Experience</Text>
        <ScrollView>
          {models.map((model) => (
            <View key={model.id} style={styles.card} >
              <Text style={styles.titleText}>{model.name}</Text>
              <Text>{model.artist}</Text>
              <Text>{model.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: "grey",
    textAlign: "center",
    fontSize: 25,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  tinyLogo: {
    height: 100,
    width: 200,
    resizeMode: "contain",
  },
  card: {
    borderRadius: 20,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
  },
});
