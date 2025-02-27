import React from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import styles from "./CustomTextAreaField.module.scss";

interface CustomTextAreaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

export const CustomTextAreaField: React.FC<CustomTextAreaFieldProps> = ({
  label,
  name,
  readOnly = false,
  ...props
}) => {

  const { values, setFieldValue } = useFormikContext<{ [key: string]: string | undefined }>();

  const currentValue = String(readOnly ? props.defaultValue : values[name] ?? '');

  const formatTextAsList = (text: string) => {
    return text
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line, index) => <li key={index}>{line}</li>);
  };
  return (
    <div className={styles.textareaGroup}>
      <label htmlFor={name} className={styles.label}>
        {label} {props.required && <span className={styles.required}>*</span>}
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
          placeholder={props.placeholder}
          required={props.required}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setFieldValue(name, e.target.value)
          }
          {...props}
        />
      )}

      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};