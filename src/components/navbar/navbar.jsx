import classes from './navbar.module.css';
import { AiFillFire } from 'react-icons/ai';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

import CartIcon from '../cartIcon/cartIcon';

import { handleSignOut } from '../../firebase/firebaseUtils';

import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { createStructuredSelector } from 'reselect';

const Navbar = ({currentUser}) => {
  console.log(currentUser);
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
        <Link
          to="/"
          className={classes.option}
          onClick={() => setShowNav(!showNav)}
        >
          home
        </Link>
        <Link
          to="/contactus"
          className={classes.option}
          onClick={() => setShowNav(!showNav)}
        >
          contact us
        </Link>
        <Link to="/shop" className={classes.option}>
          shop
        </Link>
        {currentUser ? (
          <div className={classes.option} onClick={() => {setShowNav(!showNav); handleSignOut()} }>
            sign out
          </div>
        ) : (
          <Link
            to="/signin"
            className={classes.option}
            onClick={() => setShowNav(!showNav)}
          >
            sign in
          </Link>
        )}
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
 
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Navbar);