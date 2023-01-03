import classes from './navbar.module.css';
import { AiFillFire } from 'react-icons/ai';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

import CartIcon from '../cartIcon/cartIcon';

import { auth } from '../../firebase/firebaseUtils';
import { signOut } from 'firebase/auth';

import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { createStructuredSelector } from 'reselect';

const Navbar = ({currentUser}) => {
  const [showNav, setShowNav] = useState(false);
  const history = useHistory();
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
          <div
            className={classes.option}
            onClick={() => {
              setShowNav(!showNav);
              signOut(auth);
            }}
          >
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
        <div
          className={classes.cart}
          onClick={() => history.push("/cartItems")}
        >
          <CartIcon />
        </div>
      </div>
      <div
        className={classes.mobileCart}
        onClick={() => history.push("/cartItems")}
      >
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