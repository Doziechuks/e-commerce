import classes from './navbar.module.css';
import { AiFillFire } from 'react-icons/ai';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import CartIcon from '../cartIcon/cartIcon';

import { auth } from '../../firebase/firebaseUtils';
import { signOut } from 'firebase/auth';

import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { createStructuredSelector } from 'reselect';

const Navbar = ({currentUser}) => {
  const [showNav, setShowNav] = useState(false);
  const [path, setPathname] = useState('');
  const history = useHistory();
  const {pathname} = useLocation();

  useEffect(() => {
    setPathname(pathname);
  }, [pathname])

  return (
    <div className={classes.wrapper}>
      <Link to="/" className={classes.logo}>
        <AiFillFire className={classes.icon} />
      </Link>
      <div className={`${classes.options} ${showNav ? classes.show : ""}`}>
        <div className={classes.mobileBox} onClick={() => setShowNav(!showNav)}>
          <FaTimes className={classes.mobileIcontimes} />
        </div>
        <div className={classes.optionWrapper}>
          <Link
            to="/"
            className={classes.option}
            onClick={() => setShowNav(!showNav)}
          >
            home
          </Link>
          <div
            className={`${classes.underline} ${
              path === "/" ? classes.active : ""
            }`}
          />
        </div>
        <div className={classes.optionWrapper}>
          <Link
            to="/contactus"
            className={classes.option}
            onClick={() => setShowNav(!showNav)}
          >
            contact us
          </Link>
          <div
            className={`${classes.underline} ${
              path.includes("/contactus") ? classes.active : ""
            }`}
          />
        </div>
        <div className={classes.optionWrapper}>
          <Link
            to="/shop"
            className={classes.option}
            onClick={() => setShowNav(!showNav)}
          >
            shop
          </Link>
          <div
            className={`${classes.underline} ${
              path.includes("/shop") ? classes.active : ""
            }`}
          />
        </div>
        <div className={classes.optionWrapper}>
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
            className={`${classes.underline} ${
              path.includes("/sigin") ? classes.active : ""
            }`}
          />
        </div>

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