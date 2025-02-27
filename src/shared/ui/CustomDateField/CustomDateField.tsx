import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./CustomDateField.module.scss";
import CalendarIcon from "../../../assets/images/icons/calendar.svg";

interface CustomDateFieldProps {
  label: string;
  name: string;
  required?: boolean;
}

export const CustomDateField: React.FC<CustomDateFieldProps> = ({ label, name, required = false }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.label}>
      {label} {required && <span className={styles.required}>*</span>}
      </label>
      <div className={styles.datePickerWrapper}>
        <Field id={name} name={name} type="date" className={styles.dateInput} />
        <button
          type="button"
          className={styles.calendarIcon}
          onClick={() => {
            const dateInput = document.getElementById(name) as HTMLInputElement;
            if (dateInput) dateInput.showPicker();
          }}
        >
          <img src={CalendarIcon} alt="Календарь" className={styles.calendarImg} />
        </button>
      </div>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};
