import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./CustomInputField.module.css";

interface CustomInputFieldProps {
  label: string;
  layout?: "row" | "column";
  name: string;
  type?: string;
  required?: boolean;
  size?: 'small' | 'medium' | 'large'
}

export const CustomInputField: React.FC<CustomInputFieldProps> = ({
  label,
  layout = "column",
  name,
  type = "text",
  required = false,
  size = "medium",
}) => {
  return (
    <div className={`${styles.inputGroup} ${styles[layout]}`}>
      <label htmlFor={name} className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <Field name={name} type={type} className={`${styles.input} ${styles[size]}`} required={required} />
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};
