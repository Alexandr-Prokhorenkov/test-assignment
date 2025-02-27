import React from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import styles from "./CustomTextAreaField.module.css";

interface CustomTextAreaFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  defaultValue?: string;
}

export const CustomTextAreaField: React.FC<CustomTextAreaFieldProps> = ({
  label,
  name,
  placeholder = "",
  required = false,
  readOnly = false,
  defaultValue = '',
}) => {

  const { values, setFieldValue } = useFormikContext<{ [key: string]: string }>();

  const currentValue = readOnly ? defaultValue : values[name];

  const formatTextAsList = (text: string) => {
    return text
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line, index) => <li key={index}>{line}</li>);
  };
  return (
    <div className={styles.textareaGroup}>
      <label htmlFor={name} className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      {readOnly ? (
        <div className={styles.readOnlyPreview}>
          <ul>{formatTextAsList(currentValue)}</ul>
        </div>
      ) : (
        <Field
          as="textarea"
          name={name}
          className={styles.textarea}
          placeholder={placeholder}
          required={required}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setFieldValue(name, e.target.value)
          }
        />
      )}

      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};