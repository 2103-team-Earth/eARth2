import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  NativeModules,
} from "react-native";

export default class Profile extends Component {
  render() {
    return (
      <View>
        <Text> Profile </Text>
        <Button title="Camera" onPress={() => navigation.navigate("Camera")} />
      </View>
    );
  }
}

module.exports = Profile;
