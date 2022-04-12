import React from "react";
import style from "../styles/FormInput.module.css";
function FormInput(props) {
  const [focused, setFocused] = React.useState(false);
  const { label, handleChange, errorMessage, id, ...inputProps } = props;

  const handleFocus = (event) => {
    setFocused(true);
  };

  return (
    <div className={style.form__input}>
      {/* <label htmlFor="username">Username</label> */}
      <label htmlFor={props.name}>{label}</label>
      <input
        {...inputProps}
        onChange={handleChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />

      <span>{errorMessage}</span>
    </div>
  );
}

export default FormInput;
