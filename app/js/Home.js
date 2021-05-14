import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  NativeModules,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//add explore link to this once we get there
function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Text> Home </Text>
      <Button
        title="View My Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

module.exports = Home;
