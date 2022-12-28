import classes from './navbar.module.css';
import { AiFillFire } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={classes.wrapper}>
      <Link to="/" className={classes.logo}>
        <AiFillFire className={classes.icon} />
      </Link>
      <div className={classes.options}>
        <Link to="/" className={classes.option}>
          home
        </Link>
        <Link to="/contactus" className={classes.option}>
          contact us
        </Link>
        <Link to="/shop" className={classes.option}>
          shop
        </Link>
        <Link to="/signin" className={classes.option}>
          sign in
        </Link>
      </div>
    </div>
  );
}
 
export default Navbar;