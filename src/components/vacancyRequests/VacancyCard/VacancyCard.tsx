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
    navigate(`${ROUTES.EDIT}/${vacancy.id}`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <p className={styles.date}>
          Дата публикации: {formatDate(vacancy.openDate)}
        </p>
        <button className={styles.editButton} onClick={handleEditClick}>
          <img
            className={styles.editButtonIcon}
            src={editIcon}
            alt="Редактировать"
          />
        </button>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.leftContent}>
          <p className={styles.vacancyName}>{vacancy.vacancyName}</p>
          <p className={styles.address}>{vacancy.address}</p>
        </div>
        <div className={styles.rightContent}>
          <p className={styles.salary}>
            <span className={styles.salaryDecoraton}>
              от {formatNumbers(vacancy.salaryFrom)} до{" "}
              {formatNumbers(vacancy.salaryTo)}
            </span>{" "}
            {vacancy.salary === "net" ? "на руки" : "до вычета налогов"}
          </p>
          <p className={styles.professionalExperience}>
            Требуемый опыт:{" "}
            <span className={styles.professionalExperienceDecoraton}>
              {vacancy.professionalExperience}
            </span>
          </p>
          <p className={styles.metroStation}>{vacancy.metroStation}</p>
        </div>
      </div>
    </div>
  );
};
