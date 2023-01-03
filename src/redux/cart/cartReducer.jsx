import { cartActionType } from "./cartActionType";
import { addItemToCart } from "./cartUtils";
import { removeItemFromCart } from "./cartUtils";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case cartActionType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case cartActionType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartitem => cartitem.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default cartReducer;
