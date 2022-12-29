import ShopItems from '../shopItems/shopItems';
import classes from './shopContainer.module.css';

const ShopContainer = ({collection}) => {
  const { title, items } = collection
  return (
    <div className={classes.wrapper}>
      <h1>{title}</h1>
      <div className={classes.items}>
        {items.map((item) => {
          return <ShopItems key={item.id} item={item} />;
        })}
      </div>

      <p>see more</p>
    </div>
  );
}
 
export default ShopContainer;