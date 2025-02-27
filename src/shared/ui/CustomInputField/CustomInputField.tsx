import React from "react";
import { Field, ErrorMessage, useField } from "formik";
import styles from "./CustomInputField.module.scss";

interface CustomInputFieldProps {
  label: string;
  layout?: "row" | "column";
  name: string;
  type?: string;
  required?: boolean;
  size?: "small" | "medium" | "large";
}

export const CustomInputField: React.FC<CustomInputFieldProps> = ({
  label,
  layout = "column",
  name,
  type = "text",
  required = false,
  size = "medium",
}) => {
  const [field, meta] = useField(name);
  return (
    <div className={`${styles.inputGroup} ${styles[layout]}`}>
      <label htmlFor={name} className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <Field
       {...field}
        name={name}
        type={type}
        className={`${styles.input} ${styles[size]} ${
          meta.touched && meta.error ? styles.errorInput : ""
        }`}
        required={required}
      />
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};
