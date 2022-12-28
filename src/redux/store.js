import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middleWares = [thunk];

export const store = legacy_createStore(rootReducer, applyMiddleware(...middleWares));

