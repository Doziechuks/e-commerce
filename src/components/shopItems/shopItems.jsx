import classes from './shopItems.module.css';

const ShopItems = ({ item }) => {
  const {name, price, imageUrl} = item;
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={classes.info}>
        <h3 className={classes.title}>{name}</h3>
        <h4 className={classes.price}>${price}</h4>
      </div>
    </div>
  );
}
 
export default ShopItems;