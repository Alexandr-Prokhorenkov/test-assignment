export const formatDate = (date: string | number | Date): string => {
  if (!date) return "Неизвестная дата";

  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) return "Некорректная дата";

  return parsedDate.toLocaleDateString("ru-RU", {
    day: "2-digit", 
    month: "2-digit",
    year: "numeric",
  }).replace(/\//g, '.');
};