import classes from './app.module.css';
import { useEffect } from "react";

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Homepage from './pages/homePage/homePage';
import SignInPage from './pages/signIn/signin';

import { Switch, Route } from 'react-router-dom';

import { auth } from './firebase/firebaseUtils';
import { onAuthStateChanged } from 'firebase/auth';

import { connect } from 'react-redux';
import { handleUserAction } from "./redux/user/userAction";
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/userSelector';


function App({ currentUser, setCurrentUser }) {
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(user){
        console.log(user);
      }
    });
  }, []);
  return (
    <div className={classes.wrapper}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signin" component={SignInPage} />
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(handleUserAction(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
