import { useEffect, useState } from "react";
import styles from "./VacancyRequests.module.scss";
import { VacancyCard } from "@components/vacancyRequests/VacancyCard/VacancyCard";
import { CustomTitle } from "@shared/ui";
import { VacancyFormValues } from "@shared/types";
import apiService from "@shared/api/ApiService";

export const VacancyFormRequests = () => {
  const [vacancies, setVacancies] = useState<VacancyFormValues[]>([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const data = await apiService.vacancy.getVacancies();
        setVacancies(data);
      } catch (error) {
        console.error("Ошибка загрузки вакансий:", error);
      }
    };

    fetchVacancies();
  }, []);

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
