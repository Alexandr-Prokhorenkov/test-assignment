import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./CustomRadioField.module.scss";

interface CustomRadioFieldProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  layout?: "row" | "column";
  required?: boolean;
}

export const CustomRadioField: React.FC<CustomRadioFieldProps> = ({
  label,
  name,
  options,
  layout = "row",
  required = false,
}) => {
  return (
    <div className={`${styles.radioGroup} ${styles[layout]}`}>
      <label className={styles.label}>{label} {required && <span className={styles.required}>*</span>}</label>
      <div className={styles.options}>
        {options.map((option) => (
          <label key={option.value} className={styles.radioLabel}>
            <Field
              type="radio"
              name={name}
              value={option.value}
              className={styles.radioInput}
            />
            <span className={styles.customRadio}></span>
            {option.label}
          </label>
        ))}
      </div>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};
