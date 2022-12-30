import classes from './cartIcon.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartIcon = () => {
  return ( 
    <div className={classes.wrapper}>
      <AiOutlineShoppingCart className={classes.icon} />
      <p>0</p>
    </div>
   );
}
 
export default CartIcon;
