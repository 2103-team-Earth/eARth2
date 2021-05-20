import { combineReducers } from "redux";
import navigationReducer from "./navigation";

//combine reducer
const rootReducer = combineReducers({
  navigation: navigationReducer,
  // models: modelsReducer,
});

//store
export default rootReducer;
