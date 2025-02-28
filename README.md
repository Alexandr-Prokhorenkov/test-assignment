# Тестовое задание на позицию Frontend-разработчик в Филиал ФКУ Налог-Сервис ФНС

 [Задание](https://www.figma.com/design/WpLfM39Rw6rXVLSBBELqXc/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-Frontend-Developer-%D0%A4%D0%9A%D0%A3-%22%D0%9D%D0%B0%D0%BB%D0%BE%D0%B3-%D0%A1%D0%B5%D1%80%D0%B2%D0%B8%D1%81%22?node-id=38-458&t=pcoHdSu4r1aA3T91-0).

## Описание проекта

Приложение для создания и редактирования заявки на размещение вакансии.


## Стек технологий

- **Frontend:** React, TypeScript, 
- **Работа с данными:** MOKKY.DEV (Работает только при выключенном VPN)
- **Работа с формами:** Formik + Yup

## Структура проекта
```
├── public/                         # Статические файлы
├── src/
│   ├── assets/                     # Медиафайлы (иконки, изображения)
│   │   ├── images/
│   │   └── icons/
│   ├── components/                 # UI-компоненты
│   │   ├── CreateVacancyForm/
│   │   ├── EditVacancyForm/
│   │   ├── Header/
│   │   └── VacancyRequests/
│   ├── shared/                     # Общие утилиты и стили
│   │   ├── api/                    # API-запросы
│   │   ├── styles/                 # Глобальные стили
│   │   ├── types/                  # Типы TypeScript
│   │   ├── ui/                     # UI-компоненты
│   │   └── utils/                  # Вспомогательные функции
│   ├── routes.ts                   # Конфигурация маршрутов
│   ├── App.module.scss             # Стили для App.tsx
│   ├── App.tsx                     # Главный компонент приложения
│   ├── index.css                   # Глобальные стили
│   ├── main.tsx                    # Точка входа в приложение
│   ├── vite-env.d.ts               # Декларации для Vite
└── package.json                    # Метаданные проекта
```

## Установка

```bash
# Клонировать репозиторий
git clone https://github.com/Alexandr-Prokhorenkov/test-assignment.git

# Перейти в директорию проекта
cd test-assignment.git

# Установить зависимости
npm install

# Запустить приложение
npm run dev
```