import classes from "./checkoutPage.module.css";
import { useState, useEffect } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/userSelector";

import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebaseUtils";

const CheckoutPage = ({ currentUser }) => {
  const [cartItem, setCartItem] = useState([]);

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
      setCartItem(cartItemsArray);
    });
    return () => getSnapShot();
  }, []);
  return (
    <div className={classes.wrapper}>
      check out page
      <div>
        {cartItem.map((item) => {
          return <p>{item.name}</p>;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(CheckoutPage);
