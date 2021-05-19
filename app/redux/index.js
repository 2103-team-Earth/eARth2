import { combineReducers } from "redux";

const appReducer = combineReducers({
  navigation: navigationReducer,
  models: modelsReducer,
});

export default appReducer;
