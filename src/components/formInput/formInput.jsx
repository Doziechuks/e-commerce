import classes from './formInput.module.css';

const FormInput = ({ label, ...otherProps }) => {
  return ( 
    <div className={classes.wrapper}>
      <label className={classes.label}>{label}</label>
      <input className={classes.input} {...otherProps} />
    </div>
   );
}
 
export default FormInput;