import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { Header } from "./components/Header/Header";
import { CreateVacancyForm } from "./components/CreateVacancyForm/CreateVacancyForm";
import { EditVacancyForm } from "./components/EditVacancyForm/EditVacancyForm";
import { VacancyFormRequests } from "./components/VacancyRequests/VacancyRequests";
import { ROUTES } from "./shared/routes";

export const App = () => {
  return (
    <Router>
      <Header />
      <div className={styles.app}>
        <Routes>
          <Route path={ROUTES.HOME} element={<CreateVacancyForm />} />
          <Route path={`${ROUTES.EDIT}/:id`} element={<EditVacancyForm />} />
          <Route path={ROUTES.REQUESTS} element={<VacancyFormRequests />} />
        </Routes>
      </div>
    </Router>
  );
};

// Объеденить логику компонентов createVacancyForm и editVacancyForm в одну
// Посмотреть по проекту где можно использовать миксины, добавить CSS переменные для шривфтов, и возможно еще чего то
// /src/shared/ui директория 3 пункт
// assests можно вывести в паблик что бы уменьшить размер импорта

