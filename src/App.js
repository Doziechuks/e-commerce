import classes from "./app.module.css";
import { useEffect } from "react";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import WithSpinner from "./components/loadingSpinner/spinner";
import Homepage from "./pages/homePage/homePage";
import SignInPage from "./pages/signIn/signin";
import SignupPage from "./pages/signup/signup";
import CollectionsPage from "./pages/shopCollectionsPage/shopCollections";
import CheckoutPage from "./pages/checkoutPage/checkoutPage";

import { Switch, Route, Redirect } from "react-router-dom";

import { auth, manageUserAuthProfile } from "./firebase/firebaseUtils";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";

import { connect } from "react-redux";
import { handleUserAction, handleIsLoadingAction } from "./redux/user/userAction";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser, selectIsLoading } from "./redux/user/userSelector";

function App({ currentUser, setCurrentUser, isLoading, setIsLoading }) {
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoading();
        const userDocRef = await manageUserAuthProfile(user);
        onSnapshot(userDocRef, (snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }
      setCurrentUser(user);
    });
  }, []);
  if(isLoading){
    return <WithSpinner />;
  }

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
        <Route exact path="/shop/:collectionId" component={CollectionsPage} />
        <Route
          exact
          path="/cartItems"
          render={() => (!currentUser ? <Redirect to="/signin" /> : <CheckoutPage />)}
        />
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isLoading: selectIsLoading,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(handleUserAction(user)),
  setIsLoading: () => dispatch(handleIsLoadingAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
