import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import appReducer from "./redux";
import thunkMiddleware from "redux-thunk"; 

let middleware = thunkMiddleware.withExtraArgument({ axios }),


const rootReducer = (state, action) => {

  return appReducer(state, action);
};
const storeConfig = () => {
    return createStore(
  rootReducer, applyMiddleware(middleware)
)
    
}
export default storeConfig
