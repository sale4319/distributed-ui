import React from "react";

import styles from "./SubmitButton.module.css";

interface SubmitButtonProps {
  submit?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset" | undefined;
}

export const SubmitButton = ({
  submit = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: SubmitButtonProps) => {
  const mode = submit ? styles["button-submit--blue"] : styles["glow-on-hover"];
  return (
    <button
      type="submit"
      className={[
        styles["button-submit"],
        styles[`button-submit-${size}`],
        mode,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
