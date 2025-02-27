import { useEffect, useRef, useState } from "react";
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
  const { setFieldValue, setFieldTouched, setFieldError } = useFormikContext();
  const [field, meta] = useField(name);
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setOpen(false);
        if (!field.value && hasInteracted.current) {
          setFieldTouched(name, true);
          setFieldError(name, "Необходимо выбрать значение");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [field.value, name, setFieldTouched, setFieldError]);

  useEffect(() => {
    if (!open && hasInteracted.current && !field.value) {
      setFieldTouched(name, true);
      setFieldError(name, "Необходимо выбрать значение");
    }
  }, [open, field.value, name, setFieldTouched, setFieldError]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      setOpen(!open);
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prevIndex) => {
        let nextIndex = prevIndex === null ? 0 : prevIndex + (e.key === "ArrowDown" ? 1 : -1);
        if (nextIndex < 0) nextIndex = options.length - 1;
        if (nextIndex >= options.length) nextIndex = 0;
        return nextIndex;
      });
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const handleOptionSelect = async (value: string) => {
    hasInteracted.current = true;
    try {
      await setFieldValue(name, value);
      setFieldTouched(name, true);
      setFieldError(name, undefined);
      setOpen(false);
      setFocusedIndex(null);
    } catch (error) {
      console.error("Ошибка при выборе значения:", error);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    hasInteracted.current = true;
  };

  return (
    <div className={styles.inputGroup} ref={selectRef}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <div
        className={`${styles.selectWrapper} ${meta.touched && meta.error ? styles.errorSelect : ""}`}
        tabIndex={0}
        role="listbox"
        aria-expanded={open}
        onClick={handleOpen}
        onKeyDown={handleKeyDown}
      >
        <div className={`${styles.select} ${field.value ? styles.selected : ""}`}>
          {field.value
            ? options.find((opt) => opt.value === field.value)?.label
            : "Выберите"}
        </div>
        <span className={`${styles.arrow} ${open ? styles.arrowOpen : ""}`} />
        {open && (
          <ul className={styles.options}>
            {options.map((option, index) => (
              <li
                key={option.value}
                role="option"
                aria-selected={field.value === option.value}
                className={`${styles.option} ${index === focusedIndex ? styles.focused : ""}`}
                onClick={() => handleOptionSelect(option.value)}
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
