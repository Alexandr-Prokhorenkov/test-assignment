import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { Header } from "./components/header/Header";
import { CreateVacancyForm } from "./components/createVacancyForm/CreateVacancyForm";
import { EditVacancyForm } from "./components/editVacancyForm/EditVacancyForm";
import { VacancyFormRequests } from "./components/vacancyRequests/VacancyRequests";
import { ROUTES } from "./shared/routes";

export const App = () => {
  return (
    <Router>
      <Header />
      <div className={styles.app}>
        <Routes>
          <Route path={ROUTES.HOME} element={<CreateVacancyForm />} />
          <Route path={ROUTES.EDIT} element={<EditVacancyForm />} />
          <Route path={ROUTES.REQUESTS} element={<VacancyFormRequests />} />
        </Routes>
      </div>
    </Router>
  );
};
