import React from "react";
import { Field, ErrorMessage, useField } from "formik";
import styles from "./CustomInputField.module.scss";
import { InputSize, LayoutType } from "@shared/types/client";

interface CustomInputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: string;
  layout?: LayoutType;
  size?: InputSize;
}

export const CustomInputField: React.FC<CustomInputFieldProps> = ({
  label,
  layout = "column",
  size = "medium",
  ...props
}) => {
  const [field, meta] = useField(props.name);
  return (
    <div className={`${styles.inputGroup} ${styles[layout]}`}>
      <label htmlFor={props.name} className={styles.label}>
        {label} {props.required && <span className={styles.required}>*</span>}
      </label>
      <Field
       {...field}
        name={props.name}
        type={props.type}
        className={`${styles.input} ${styles[size]} ${
          meta.touched && meta.error ? styles.errorInput : ""
        }`}
        required={props.required}
      />
      <ErrorMessage name={props.name!} component="div" className={styles.error} />
    </div>
  );
};
