import React from "react";
import "./button.css";
const Button = ({
  type = "button",
  children,
  onClick,
  variant = "primary",
}) => {
  return (
    <button type={type} className={`btn btn__${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
