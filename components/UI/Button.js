import React from "react";

function Button(props) {
  return (
    <button type={props.type || "button"} onClick={props.onClick}>
      {props.children}

      <style jsx>
        {`
          .button {
            padding: 0.75rem 1rem;
            background: #0070f3;
          }
        `}
      </style>
    </button>
  );
}

export default Button;
