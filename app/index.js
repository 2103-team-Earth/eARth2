import { AppRegistry } from "react-native";
import App from "./App.js";
import { Provider } from "react-redux";
import storeConfig from "./store";

const store = storeConfig();

const appReduxed = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent("app", () => appReduxed);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent("ViroSample", () => appReduxed);
