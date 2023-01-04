import classes from './spinner.module.css';

const WithSpinner = () => {
  return ( 
    <div className={classes.wrapper}>
      <div className={classes.spinner} />
    </div>
   );
}
 
export default WithSpinner;