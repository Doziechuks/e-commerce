import classes from "./checkoutPage.module.css";
import { useEffect } from "react";
import CartItems from "../../components/cartItems/cartItems";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { selectCartItems } from "../../redux/cart/cartSelector";
import { handleAddCartItem } from "../../redux/cart/cartAction";

import { doc, query, collection, onSnapshot, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseUtils";

const CheckoutPage = ({ currentUser, cartItems, setCartItems }) => {
  console.log({cartItems});

  useEffect(() => {
    if (!currentUser.id) return;
    const queryDoc = query(
      collection(db, "users", currentUser.id, "cartCollections")
    );
    const getSnapShot = onSnapshot(queryDoc, (querySnapShot) => {
      let cartItemsArray = [];
      querySnapShot.forEach((doc) => {
        cartItemsArray.push({ ...doc.data(), id: doc.id });
      });
      setCartItems(cartItemsArray);
    });
    return () => getSnapShot();
  }, []);

  const increaseCartQuantity = async (cartItem) => {
    try {
      await updateDoc(doc(db, 'users', currentUser.id, 'cartCollections', cartItem.id ), {
        quantity: cartItem.quantity + 1
      })
    } catch (error) {
      console.log(error.message);
    }
  }
   const decreaseCartQuantity = async (cartItem) => {
    if(cartItem.quantity === 1){
      return deleteCartItem(cartItem.id)
    }
     try {
       await updateDoc(
         doc(db, "users", currentUser.id, "cartCollections", cartItem.id),
         {
           quantity: cartItem.quantity - 1,
         }
       );
     } catch (error) {
       console.log(error.message);
     }
   };
   const deleteCartItem = async (id) => {
    try {
      await deleteDoc(doc(db, "users", currentUser.id, "cartCollections", id))
    } catch (error) {
      console.log(error.message);
    }
   };

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>cart items</h1>
      <h3 className={classes.total}>total price: $0</h3>
      <div className={classes.cartItemsContainer}>
        {cartItems.map((item) => {
          return (
            <CartItems
              key={item.id}
              item={item}
              increaseCartQuantity={increaseCartQuantity}
              decreaseCartQuantity={decreaseCartQuantity}
              deleteCartItem={deleteCartItem}
            />
          );
        })}
      </div>
      <button className={classes.button}>pay here</button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems
});
const mapDispatchToProps = dispatch => ({
  setCartItems: (cartItems) => dispatch(handleAddCartItem(cartItems))
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
