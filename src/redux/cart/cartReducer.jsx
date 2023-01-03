import { cartActionType } from "./cartActionType";

const INITIAL_STATE = {
  cartItems: [],
  isFetching: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.IS_FETCHING:
      return{
        ...state,
        isFetching: true
      }
    case cartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: action.payload,
        isFetching: false,
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
