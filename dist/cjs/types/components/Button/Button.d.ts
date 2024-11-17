import React from "react";
import "./Button.css";
export interface ButtonProps {
    label: string;
    action: () => void;
}
declare const Button: ({ label, action }: ButtonProps) => React.JSX.Element;
export default Button;
