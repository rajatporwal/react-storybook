import React from "react";
import './Button.css'

const Button = (props) => {
  const { variant = "primary", onClick = () => console.log('clicked'), children, ...rest } = props;
  return (
    <button className={`button ${variant}`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
