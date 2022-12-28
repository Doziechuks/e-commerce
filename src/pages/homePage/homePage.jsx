import classes from './homePage.module.css';
import HomeDirectory from '../../components/directory/homeDirectory';
import ShopPreview from '../../components/shopPreview/shopPreview';

const Homepage = () => {
  return ( 
    <div className={classes.wrapper}>
      <HomeDirectory />
      <ShopPreview />
    </div>
   );
}
 

export default Homepage;