import { useEffect, useState } from "react";
import styles from "./VacancyRequests.module.css";
import { VacancyCard } from "@components/vacancyRequests/VacancyCard/VacancyCard";
import { CustomTitle } from "@shared/ui";
import { VacancyFormValues } from "@shared/types";
import { VacancyService } from "@shared/api/vacancyService";

export const VacancyFormRequests = () => {
  const [vacancies, setVacancies] = useState<VacancyFormValues[]>([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const data = await VacancyService.getVacancies();
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
