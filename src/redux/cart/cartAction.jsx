import { cartActionType } from "./cartActionType";

export const handleAddCartItem = (cartItem) => ({
  type: cartActionType.ADD_ITEM,
  payload: cartItem,
});
export const handleIsFetching = () => ({
  type: cartActionType.IS_FETCHING
});

export const handleClearItemFromCart = (cartItem) => ({
  type: cartActionType.CLEAR_ITEM_FROM_CART,
  payload: cartItem
});