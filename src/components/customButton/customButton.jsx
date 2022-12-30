import classes from "./customButton.module.css";

const CustomButton = ({ children, isGoogle, ...otherProps }) => {
  return (
    <button
      className={`${classes.button} ${isGoogle ? classes.google : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
