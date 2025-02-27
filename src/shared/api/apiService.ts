import axios, { AxiosInstance } from "axios";
import VacancyService from "./VacancyService";

class ApiService {
  private api: AxiosInstance;
  vacancy: VacancyService;

  constructor() {
    this.api = axios.create({
      baseURL: "https://359ffeaa109225a3.mokky.dev",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.vacancy = new VacancyService(this.api);
  }
}

const apiService = new ApiService();

export default apiService;

