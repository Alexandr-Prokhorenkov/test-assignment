import React from "react";
import styles from "./CustomButton.module.scss";
import { ButtonType, ButtonVariant } from "@shared/types/client";

interface CustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
  type?: ButtonType;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  variant = "filled",
  type = "button",
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      type={type}
      {...props}
    >
      {text}
    </button>
  );
};
