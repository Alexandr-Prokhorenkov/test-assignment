import React, { useState, useEffect } from "react";
import { Field, ErrorMessage, useField } from "formik";
import styles from "./CustomDateField.module.scss";
import CalendarIcon from "../../../assets/images/icons/calendar.svg";

interface CustomDateFieldProps {
  label: string;
  name: string;
  required?: boolean;
}

export const CustomDateField: React.FC<CustomDateFieldProps> = ({
  label,
  name,
  required = false,
}) => {
  const [field, meta, helpers] = useField(name);
  const [hasValue, setHasValue] = useState(!!field.value);

  useEffect(() => {
    setHasValue(!!field.value);
  }, [field.value]);

  const handleShowPicker = () => {
    const dateInput = document.getElementById(name) as HTMLInputElement;
    dateInput.showPicker();
  };

  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <div className={styles.datePickerWrapper} onClick={handleShowPicker}>
        <Field
          {...field}
          id={name}
          name={name}
          type="date"
          className={`${styles.dateInput} ${hasValue ? styles.filled : ""} ${
            meta.touched && meta.error ? styles.errorDateInput : ""
          }`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            helpers.setValue(e.target.value);
            setHasValue(!!e.target.value);
          }}
        />
        <button
          type="button"
          className={styles.calendarIcon}
          onClick={() => {
            const dateInput = document.getElementById(name) as HTMLInputElement;
            if (dateInput) dateInput.showPicker();
          }}
        >
          <img
            src={CalendarIcon}
            alt="Календарь"
            className={styles.calendarImg}
          />
        </button>
      </div>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};
