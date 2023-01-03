import classes from './shopItems.module.css';
import CustomButton from '../customButton/customButton';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelector';

import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseUtils';

const ShopItems = ({ item, isCollectionPage, currentUser, ...otherProps }) => {
  const {name, price, imageUrl} = item;
  const history = useHistory();
  const handleAddCart = async ({currentUser}) => {
    if (currentUser === null) {
      history.push('/signin')
      return;
    }
    const cartCollectionId = name.toLowerCase();
    try {
      await setDoc(doc(db, 'users', currentUser.id, 'cartCollections', cartCollectionId), {
        name: name,
        price: price,
        imageUrl: imageUrl,
        quantity:  1,
        id: cartCollectionId
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div
      className={`${classes.wrapper} ${
        isCollectionPage ? classes.collection : ""
      }`}
      {...otherProps}
    >
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={classes.info}>
        <div className={classes.namebox}>
          <h3 className={classes.title}>{name}</h3>
          <CustomButton
            onClick={() => handleAddCart({currentUser})}
            addToCart
          >
            Add to cart
          </CustomButton>
        </div>
        <h4 className={classes.price}>${price}</h4>
      </div>
    </div>
  );
}
 
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(ShopItems);