import React, { useEffect, useState } from "react";
import styles from "./VacancyRequests.module.css";
import { VacancyCard } from "./VacancyCard/VacancyCard";
import { CustomTitle } from "../../shared/ui";

export interface VacancyFormValues {
  position: string;
  vacancyName: string;
  department: string;
  openDate: string;
  closeDate: string;
  gender: string;
  education: string;
  salary: string;
  region: string;
  address: string;
  metroStation: string;
  professionalExperience: string;
  workSchedule: string;
  employmentType: string;
  salaryFrom: string;
  salaryTo: string;
  responsibilities: string;
  candidateRequirements: string;
  advantages: string;
  id: number;
}

export const VacancyFormRequests = () => {
  const [vacancies, setVacancies] = useState<VacancyFormValues[]>([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await fetch(
          "https://359ffeaa109225a3.mokky.dev/userDate"
        );
        if (!response.ok) {
          throw new Error(`Ошибка запроса: ${response.status}`);
        }
        const data = await response.json();
        setVacancies(data);
      } catch (error) {
        console.error("Ошибка загрузки вакансий:", error);
      }
    };

    fetchVacancies();
  }, []);

  console.log(vacancies);

  return (
    <div className={styles.container}>
      <CustomTitle title="Заявки на размещение вакансий" />
      <div className={styles.list}>
        {vacancies.map((vacancy) => (
          <VacancyCard key={vacancy.id} {...vacancy} />
        ))}
      </div>
    </div>
  );
};
