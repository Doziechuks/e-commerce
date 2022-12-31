import classes from './shopItems.module.css';
import CustomButton from '../customButton/customButton';

const ShopItems = ({ item, isCollectionPage, ...otherProps }) => {
  const {name, price, imageUrl} = item;
  return (
    <div className={`${classes.wrapper} ${isCollectionPage ? classes.collection : ''}`} {...otherProps}>
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={classes.info}>
        <div className={classes.namebox}>
          <h3 className={classes.title}>{name}</h3>
          <CustomButton addToCart>Add to cart</CustomButton>
        </div>
        <h4 className={classes.price}>${price}</h4>
      </div>
    </div>
  );
}
 
export default ShopItems;