import { combineReducers } from "redux";
import navigationReducer from "./navigation";
import projectReducer from "./project";

//combine reducer
const rootReducer = combineReducers({
  navigation: navigationReducer,
  project: projectReducer,
});

//store
export default rootReducer;
