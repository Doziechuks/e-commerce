import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import shopReducer from "./shop/shopReducer";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";

const persistConfig = {
  key: 'root',
  storage,
  whiteList: 'cart'
}
const rootReducer = combineReducers({
  shop: shopReducer,
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);