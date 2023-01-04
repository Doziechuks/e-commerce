import classes from './shopPage.module.css';
import ShopPreview from "../../components/shopPreview/shopPreview";

const ShopPage = () => {
  return ( 
    <div className={classes.wrapper}>
      <ShopPreview />
    </div>
   );
}
 
export default ShopPage;