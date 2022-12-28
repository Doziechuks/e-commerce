import { combineReducers } from "redux";
import shopReducer from "./shop/shopReducer";

export default combineReducers({
  shop: shopReducer
});