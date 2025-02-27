import { ApiService } from "./apiService";
import { VacancyFormValues } from "../types";

const api = new ApiService("https://359ffeaa109225a3.mokky.dev");

export const VacancyService = {
  getVacancies: (): Promise<VacancyFormValues[]> => api.get("/userDate"),

  createVacancy: (vacancy: VacancyFormValues): Promise<VacancyFormValues> =>
    api.post("/userDate", vacancy),

  updateVacancy: (id: number, vacancy: VacancyFormValues): Promise<VacancyFormValues> =>
    api.patch(`/userDate/${id}`, vacancy),

  deleteVacancy: (id: number): Promise<void> => api.delete(`/userDate/${id}`),
};
