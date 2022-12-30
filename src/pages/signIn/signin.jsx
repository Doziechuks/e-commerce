import classes from './signin.module.css';
import { useHistory } from 'react-router-dom';

import FormInput from '../../components/formInput/formInput';
import CustomButton from '../../components/customButton/customButton';

const SignInPage = () => {
  const history = useHistory();
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>sign in to your account</h1>
      <form className={classes.form}>
        <FormInput type="email" label="email" required />
        <FormInput type="password" label="password" required />
        <CustomButton type="submit">sign in</CustomButton>
        <CustomButton isGoogle>sign in with google</CustomButton>
      </form>
      <p className={classes.signup}>Don't have an account ? <span onClick={() => history.push('/signup')}>sign up</span></p>
    </div>
  );
}
 
export default SignInPage;