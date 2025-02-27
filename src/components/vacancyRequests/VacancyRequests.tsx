import { useEffect, useState } from "react";
import styles from "./VacancyRequests.module.css";
import { VacancyCard } from "./VacancyCard/VacancyCard";
import { CustomTitle } from "../../shared/ui";
import { VacancyFormValues } from "../../shared/types";

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
