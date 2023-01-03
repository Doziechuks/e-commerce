import classes from './cartIcon.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';
import { selectCurrentUser } from '../../redux/user/userSelector';

const CartIcon = ({ cartItemsCount, currentUser }) => {
  return ( 
    <div className={classes.wrapper}>
      <AiOutlineShoppingCart className={classes.icon} />
      <p>{!currentUser ? 0 :cartItemsCount}</p>
    </div>
   );
}
 
const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
  currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(CartIcon);
