import React from "react";
import styles from "./VacancyCard.module.scss";
import editIcon from "@assets/images/icons/edit.svg";
import { formatDate } from "@shared/utils/formatDate";
import { formatNumbers } from "@shared/utils/formatNumbers";
import { useNavigate } from "react-router-dom";
import { VacancyFormValues } from "@shared/types/api/types";
import { ROUTES } from "@shared/routes";

export const VacancyCard: React.FC<VacancyFormValues> = (vacancy) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    if (vacancy.id) {
      navigate(`${ROUTES.EDIT}/${vacancy.id}`);
    }
  };

  if (!vacancy || !vacancy.vacancyName || !vacancy.openDate) {
    return null;
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <p className={styles.date}>
          Дата публикации: {vacancy.openDate ? formatDate(vacancy.openDate) : "—"}
        </p>
        {vacancy.id && (
          <button className={styles.editButton} onClick={handleEditClick}>
            <img
              className={styles.editButtonIcon}
              src={editIcon}
              alt="Редактировать"
            />
          </button>
        )}
      </div>
      <div className={styles.cardContent}>
        <div className={styles.leftContent}>
          <p className={styles.vacancyName}>{vacancy.vacancyName}</p>
          <p className={styles.address}>{vacancy.address || "Адрес не указан"}</p>
        </div>
        <div className={styles.rightContent}>
          {vacancy.salaryFrom !== undefined && vacancy.salaryTo !== undefined ? (
            <p className={styles.salary}>
              <span className={styles.salaryDecoraton}>
                от {formatNumbers(vacancy.salaryFrom)} до {formatNumbers(vacancy.salaryTo)}
              </span>{" "}
              {vacancy.salary === "net" ? "на руки" : "до вычета налогов"}
            </p>
          ) : (
            <p className={styles.salary}>Зарплата не указана</p>
          )}

          <p className={styles.professionalExperience}>
            Требуемый опыт:{" "}
            <span className={styles.professionalExperienceDecoraton}>
              {vacancy.professionalExperience || "Не указан"}
            </span>
          </p>
          
          {vacancy.metroStation && (
            <p className={styles.metroStation}>{vacancy.metroStation}</p>
          )}
        </div>
      </div>
    </div>
  );
};
