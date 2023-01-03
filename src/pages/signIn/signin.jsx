import classes from "./signin.module.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import FormInput from "../../components/formInput/formInput";
import CustomButton from "../../components/customButton/customButton";
import { googleSignin, auth } from "../../firebase/firebaseUtils";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { handleIsLoadingAction, handleErrorMessageAction } from '../../redux/user/userAction';
import { selectIsLoading, selectErrorMessage } from '../../redux/user/userSelector';

const SignInPage = ({ fetchError, setFetchError }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log({error: error.message});
      switch (error.message) {
        case "Firebase: Error (auth/network-request-failed).":
          return setFetchError("No internet connection");
        case "Firebase: Error (auth/user-not-found).":
          return setFetchError("Email does not exist");
        default:
          return setFetchError("Something went wrong");
      }
    }
    
  };
   useEffect(() => {
     let timerId = setInterval(() => {
       setFetchError("");
     }, 5000);
     return () => clearTimeout(timerId);
   }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>sign in to your account</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <p className={classes.error}>{fetchError}</p>
        <FormInput
          type="email"
          label="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <FormInput
          type="password"
          label="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <CustomButton type="submit">sign in</CustomButton>
        <CustomButton onClick={googleSignin} isGoogle>
          sign in with google
        </CustomButton>
      </form>
      <p className={classes.signup}>
        Don't have an account ?
        <span onClick={() => history.push("/signup")}>sign up</span>
      </p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  fetchError: selectErrorMessage,
});
const mapDispatchToProps = (dispatch) => ({
  setIsLoading: () => dispatch(handleIsLoadingAction()),
  setFetchError: (error) => dispatch(handleErrorMessageAction(error)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
