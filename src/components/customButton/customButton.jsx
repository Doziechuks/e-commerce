import classes from "./customButton.module.css";

const CustomButton = ({ children, isGoogle,addToCart, ...otherProps }) => {
  return (
    <button
      className={`${classes.button} ${isGoogle ? classes.google : ""} ${
        addToCart ? classes.cart : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
