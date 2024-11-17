import React from "react";

import styles from "./PrimaryButton.module.css";

interface PrimaryButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  mode?: "fill" | "pulse" | "close" | "raise" | "up" | "slide" | "offset";
  buttonType?: "button" | "submit";
  isLocked?: boolean;
  label?: string;
  onClick?: () => void;
}

export const PrimaryButton = ({
  primary,
  buttonType,
  size = "medium",
  mode = "fill",
  isLocked,
  label,
}: PrimaryButtonProps) => {
  const toggleColor = primary
    ? styles.fill
    : primary === undefined
    ? styles[mode]
    : styles.pulse;
  return (
    <button
      type={buttonType}
      className={[styles.primaryButton, styles[size], toggleColor].join(" ")}
    >
      {isLocked ? "Locked" : isLocked === undefined ? label : "Unlocked"}
    </button>
  );
};
