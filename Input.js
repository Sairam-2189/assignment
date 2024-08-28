import React from "react";

const Input = ({ value, name, labelName, inputType, handleChange }) => {
  return (
    <div>
      <label htmlFor={name}>{labelName}</label>
      <input
        type={inputType}
        value={value}
        name={name}
        id={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
