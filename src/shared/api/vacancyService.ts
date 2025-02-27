import { AxiosInstance } from "axios";

class VacancyService {
  private api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  async getVacancies() {
    const res = await this.api.get("/userDate");
    return res.data;
  }

  async getVacancy(id: string) {
    const res = await this.api.get(`/userDate/${id}`);
    return res.data;
  }

  async createVacancy(vacancy: unknown) {
    const res = await this.api.post("/userDate", vacancy);
    return res.data;
  }

  async updateVacancy(id: number, vacancy: unknown) {
    const res = await this.api.patch(`/userDate/${id}`, vacancy);
    return res.data;
  }

  async deleteVacancy(id: number) {
    await this.api.delete(`/userDate/${id}`);
  }
}

export default VacancyService;
