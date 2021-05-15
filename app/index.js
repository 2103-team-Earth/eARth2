import { AppRegistry } from "react-native";
import App from "./App.js";

AppRegistry.registerComponent("app", () => App);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent("App", () => App); //ny: changed this from ViroSample to App
