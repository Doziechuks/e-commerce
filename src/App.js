import classes from "./app.module.css";
import { useEffect } from "react";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Homepage from "./pages/homePage/homePage";
import SignInPage from "./pages/signIn/signin";
import SignupPage from "./pages/signup/signup";

import { Switch, Route, Redirect } from "react-router-dom";

import { auth, manageUserAuthProfile } from "./firebase/firebaseUtils";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";

import { connect } from "react-redux";
import { handleUserAction } from "./redux/user/userAction";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/userSelector";

function App({ currentUser, setCurrentUser }) {
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = await manageUserAuthProfile(user);
        onSnapshot(userDocRef, (snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }
      setCurrentUser(user);
    });
  }, []);

  return (
    <div className={classes.wrapper}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
        />
        <Route
          exact
          path="/signup"
          render={() => (currentUser ? <Redirect to="/" /> : <SignupPage />)}
        />
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(handleUserAction(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
