import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { Header } from "./components/header/Header";
import { CreateVacancyForm } from "./components/createVacancyForm/CreateVacancyForm";
import { EditVacancyForm } from "./components/editVacancyForm/EditVacancyForm";
import { VacancyFormRequests } from "./components/vacancyRequests/VacancyRequests";

export const App = () => {
  return (
    <Router>
      <Header />
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<CreateVacancyForm />} />
          <Route path="/edit" element={<EditVacancyForm />} />
          <Route path="/requests" element={<VacancyFormRequests />} />
        </Routes>
      </div>
    </Router>
  );
};
