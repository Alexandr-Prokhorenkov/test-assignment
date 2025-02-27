import { useState } from "react";
import styles from "./CustomSelectField.module.scss";
import { useField, useFormikContext } from "formik";

interface CustomSelectFieldProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
}

export const CustomSelectField: React.FC<CustomSelectFieldProps> = ({
  label,
  name,
  options,
  required = false,
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <div className={styles.selectWrapper} onClick={() => setOpen(!open)}>
        <div
          className={`${styles.select} ${field.value ? styles.selected : ""} ${meta.touched && meta.error ? styles.errorSelect : ""}`}
        >
          {field.value
            ? options.find((opt) => opt.value === field.value)?.label
            : "Выберите"}
        </div>
        <span className={`${styles.arrow} ${open ? styles.arrowOpen : ""}`} />
        {open && (
          <ul className={styles.options}>
            {options.map((option) => (
              <li
                key={option.value}
                className={styles.option}
                onClick={() => {
                  setFieldValue(name, option.value);
                  setOpen(false);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {meta.touched && meta.error && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  );
};
