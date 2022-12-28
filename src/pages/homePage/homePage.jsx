import classes from './homePage.module.css';

import HomeDirectory from '../../components/directory/homeDirectory';

const Homepage = () => {
  return ( 
    <div className={classes.wrapper}>
      <HomeDirectory />
    </div>
   );
}
 
export default Homepage;