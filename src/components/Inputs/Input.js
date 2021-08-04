import React from "react";
import "./input.css";
const TextInput = ({
  name,
  placeholder = "Input",
  onChange,
  type = "text",
}) => {
  return (
    <input
      name={name}
      className="input"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextInput;
