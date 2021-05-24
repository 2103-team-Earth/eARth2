import { createStore, applyMiddleware } from "redux";
import rootReducer from "./index";
import thunk from "redux-thunk"; // for when we need it

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
