import classes from './cartItems.module.css';
import { BsPlus, BsTrash } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const CartItems = ({ item, increaseCartQuantity, decreaseCartQuantity, deleteCartItem }) => {
  const { id, name, imageUrl, quantity, price } = item;
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={classes.info}>
        <div className={classes.name}>
          <h3>{name}</h3>
          <h4>${price}</h4>
        </div>
        <div className={classes.quatityBox}>
          <div className={classes.quantity}>
            <span className={classes.quantityTitle}>Quantity:</span>
            <span
              className={classes.quantityIcon}
              onClick={() => decreaseCartQuantity(item)}
            >
              <BiMinus className={classes.icon} />
            </span>
            <span className={classes.quantityNumber}>{quantity}</span>
            <span
              className={classes.quantityIcon}
              onClick={() => increaseCartQuantity(item)}
            >
              <BsPlus className={classes.icon} />
            </span>
          </div>
          <button onClick={() => deleteCartItem(id)}>
            <BsTrash className={classes.trash} />
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default CartItems;