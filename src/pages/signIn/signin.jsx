import classes from "./signin.module.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import FormInput from "../../components/formInput/formInput";
import CustomButton from "../../components/customButton/customButton";
import { googleSignin } from "../../firebase/firebaseUtils";

const SignInPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };
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
        <CustomButton onClick={googleSignin} isGoogle>sign in with google</CustomButton>
      </form>
      <p className={classes.signup}>
        Don't have an account ?
        <span onClick={() => history.push("/signup")}>sign up</span>
      </p>
    </div>
  );
};

export default SignInPage;
