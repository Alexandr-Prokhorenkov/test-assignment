import React from "react";
import styles from "./CustomButton.module.css";

interface CustomButtonProps {
  disabled?: boolean;
  text: string;
  variant?: "filled" | "outlined";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  disabled = false,
  text,
  variant = "filled",
  type = "button",
  onClick,
}) => {

  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
