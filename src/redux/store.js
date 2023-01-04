import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middleWares = [thunk];
if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

export const store = legacy_createStore(rootReducer, applyMiddleware(...middleWares));
export const persist = persistStore(store);

