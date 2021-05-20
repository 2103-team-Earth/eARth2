import { combineReducers } from "redux";
import navigationReducer from "./navigation";

//combine reducer
const rootReducer = combineReducers({
  navigation: navigationReducer,
  // models: modelsReducer, if we need it
});

//store
export default rootReducer;
