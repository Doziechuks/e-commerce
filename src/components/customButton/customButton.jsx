import classes from "./customButton.module.css";

const CustomButton = ({ children, isGoogle,addToCart,isEmptyCart, ...otherProps }) => {
  return (
    <button
      className={`${classes.button} ${isGoogle ? classes.google : ""} ${
        addToCart ? classes.cart : ""
      } ${isEmptyCart ? classes.emptyCart : ""} `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
