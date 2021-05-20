import { createStore, applyMiddleware } from "redux";
// import axios from "axios";
import rootReducer from "./index";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
