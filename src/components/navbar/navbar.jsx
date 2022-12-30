import classes from './navbar.module.css';
import { AiFillFire } from 'react-icons/ai';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

import CartIcon from '../cartIcon/cartIcon';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className={classes.wrapper}>
      <Link to="/" className={classes.logo}>
        <AiFillFire className={classes.icon} />
      </Link>
      <div className={`${classes.options} ${showNav ? classes.show : ""}`}>
        <div className={classes.mobileBox} onClick={() => setShowNav(!showNav)}>
          <FaTimes className={classes.mobileIcontimes} />
        </div>
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
        <div className={classes.cart}>
          <CartIcon />
        </div>
      </div>
      <div className={classes.mobileCart}>
        <CartIcon />
      </div>
      <div className={classes.mobileBox} onClick={() => setShowNav(!showNav)}>
        <FaBars className={classes.mobileIcon} />
      </div>
    </div>
  );
}
 
export default Navbar;