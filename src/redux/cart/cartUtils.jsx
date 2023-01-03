export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const exisitingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );

  if (exisitingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};


export const removeItemFromCart = (cartItems, cartItemsToRemove) => {
  const exisitingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToRemove.id
  );

  if (exisitingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemsToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemsToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
