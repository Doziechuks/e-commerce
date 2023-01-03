import classes from './signup.module.css';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import FormInput from '../../components/formInput/formInput';
import CustomButton from '../../components/customButton/customButton';
import { auth, googleSignin, manageUserAuthProfile } from "../../firebase/firebaseUtils";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { handleIsLoadingAction, handleErrorMessageAction } from '../../redux/user/userAction';
import { selectIsLoading, selectErrorMessage } from '../../redux/user/userSelector';


const SignupPage = ({ fetchError, setFetchError }) => {
  const history = useHistory();
  const [displayName, setDisplayName] = useState('')
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(password !== confirmPassword){
        setFetchError('Passowrds does not match');
        return;
      }
      if(displayName.trim() === '' || password.trim() === ''){
        setFetchError('An input field is empty');
        return;
      }
      try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await manageUserAuthProfile(user, { displayName });
        setDisplayName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } catch (error) {
        console.log({err: error.message});
        switch(error.message){
          case "Firebase: Error (auth/network-request-failed).":
            return setFetchError("No internet connection");
          case "Firebase: Error (auth/email-already-in-use).":
            return setFetchError("Email already exist");
          default:
            return setFetchError('Something went wrong');
        }
      }
      
    };
    
    useEffect(() => {
      let timerId = setInterval(() => {
        setFetchError("");
      }, 5000);
      return () => clearTimeout(timerId);
    }, []);

    const handleDisplayNameChange = (e) => {
      setDisplayName(e.target.value);
    };
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
    };
   
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>create an account</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <p className={classes.error}>{fetchError}</p>
        <FormInput
          type="text"
          label="full name"
          value={displayName}
          onChange={handleDisplayNameChange}
          required
        />
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
        <FormInput
          type="password"
          label="confirm password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        <CustomButton type="submit">sign up</CustomButton>
        <CustomButton onClick={googleSignin} isGoogle>
          sign up with google
        </CustomButton>
      </form>
      <p className={classes.signin}>
        Already have an account ?
        <span onClick={() => history.push("/signin")}>sign in</span>
      </p>
    </div>
  );
}
 
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  fetchError: selectErrorMessage
});
const mapDispatchToProps = dispatch => ({
  setIsLoading: () => dispatch(handleIsLoadingAction()),
  setFetchError: (error) => dispatch(handleErrorMessageAction(error))
});
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);