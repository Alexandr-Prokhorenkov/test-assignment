export class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(url: string, options?: RequestInit): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, options);

      if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
      throw error;
    }
  }

  public get<T>(url: string): Promise<T> {
    return this.request<T>(url);
  }

  public post<T>(url: string, body: unknown): Promise<T> {
    return this.request<T>(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  }

  public patch<T>(url: string, body: unknown): Promise<T> {
    return this.request<T>(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  }

  public delete<T>(url: string): Promise<T> {
    return this.request<T>(url, { method: "DELETE" });
  }
}
