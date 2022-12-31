import ShopItems from '../shopItems/shopItems';
import classes from './shopContainer.module.css';
import { useHistory } from 'react-router-dom';

const ShopContainer = ({ collection }) => {
  const history = useHistory()
  const { title, items , routeName } = collection
  return (
    <div className={classes.wrapper}>
      <h1>{title}</h1>
      <div className={classes.items}>
        {items.map((item) => {
          return <ShopItems key={item.id} item={item} />;
        })}
      </div>

     <div className={classes.link} onClick={() =>history.push(`shop/${routeName}`) }>Go to page</div>
    </div>
  );
}
 
export default ShopContainer;