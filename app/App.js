import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./js/Home";
import Profile from "./js/Profile";

enableScreens();
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AutoAR" component={TBD} />
      <Tab.Screen name="PlaneSelector" component={TBD} />
      <Tab.Screen name="ARImageMarker" component={TBD} />
    </Tab.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Your Profile" }}
      />
      <Stack.Screen name="Camera" component={Viewport} />
    </Stack.Navigator>
  );
}
// ^^ For Camera: Split the views make Auto the default then add each of them to the tab nav

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
