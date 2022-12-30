import { combineReducers } from "redux";
import shopReducer from "./shop/shopReducer";
import userReducer from "./user/userReducer";

export default combineReducers({
  shop: shopReducer,
  user: userReducer
});