import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  action: () => void;
}

const Button = ({ label, action }: ButtonProps) => {
  return (
    <button className="btn" onClick={action}>
      {label}
    </button>
  );
};

export default Button;
