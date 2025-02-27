import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import styles from "./EditVacancyForm.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CustomButton,
  CustomDateField,
  CustomInputField,
  CustomRadioField,
  CustomSelectField,
  CustomTextAreaField,
  CustomTitle,
} from "../../shared/ui";
import { VacancyFormValues } from "../../shared/types";
import { VacancyService } from "../../shared/api/vacancyService";
import { ROUTES } from "../../shared/routes";

const validationSchema = Yup.object().shape({
  position: Yup.string(),
  vacancyName: Yup.string().required("Укажите наименование"),
  department: Yup.string().required("Укажите отдел"),
  openDate: Yup.string().required("Выберите дату открытия"),
  closeDate: Yup.string().required("Выберите дату закрытия"),
  gender: Yup.string().required("Выберите пол"),
  education: Yup.string().required("Укажите образование"),
  salary: Yup.string(),
  region: Yup.string().required("Укажите регион"),
  address: Yup.string().required(
    "Введите полный адрес. Например, Походный проезд, 3с1"
  ),
  metroStation: Yup.string(),
  professionalExperience: Yup.string().required("Укажите опыт работы"),
  workSchedule: Yup.string().required("Укажите график работы"),
  employmentType: Yup.string().required("Выберите тип занятости"),
  salaryFrom: Yup.number(),
  salaryTo: Yup.number(),
  responsibilities: Yup.string(),
  candidateRequirements: Yup.string(),
  advantages: Yup.string(),
});

export const EditVacancyForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const vacancy: VacancyFormValues = location.state?.vacancy || {
    id: 0,
    position: "",
    vacancyName: "",
    department: "",
    openDate: "",
    closeDate: "",
    gender: "",
    education: "",
    salary: "",
    region: "",
    address: "",
    metroStation: "",
    professionalExperience: "",
    workSchedule: "",
    employmentType: "",
    salaryFrom: 0,
    salaryTo: 0,
    responsibilities: "",
    candidateRequirements: "",
    advantages: "",
  };

  const handleEditForm = async (
    values: VacancyFormValues,
    { resetForm }: FormikHelpers<VacancyFormValues>
  ) => {
    try {
      await VacancyService.updateVacancy(values.id, values);
      console.log("Вакансия успешно обновлена");
      resetForm();
      navigate(ROUTES.REQUESTS);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  return (
    <>
      <CustomTitle title="Форма редактирования заявки" underlineLastWord />
      <Formik
        initialValues={vacancy}
        validationSchema={validationSchema}
        onSubmit={handleEditForm}
      >
        <Form className={styles.formWrapper}>
          <section className={styles.form}>
            <div className={styles.row}>
              <CustomInputField
                label="Наименование должности"
                name="position"
              />
              <CustomInputField
                label="Наименование вакансии"
                name="vacancyName"
                required
              />
              <CustomInputField label="Отдел" name="department" required />
            </div>
            <div className={styles.row}>
              <CustomDateField label="Дата открытия" name="openDate" required />
              <CustomDateField
                label="Плановая дата закрытия"
                name="closeDate"
                required
              />
            </div>
            <div className={styles.row}>
              <CustomRadioField
                label="Пол"
                name="gender"
                options={[
                  { value: "male", label: "Мужской" },
                  { value: "female", label: "Женский" },
                ]}
                layout="column"
                required
              />
              <CustomSelectField
                label="Образование"
                name="education"
                required
                options={[
                  { value: "high", label: "Высшее" },
                  { value: "secondary", label: "Среднее" },
                ]}
              />
            </div>
          </section>
          <section className={styles.form}>
            <div className={styles.salaryWrapper}>
              <CustomRadioField
                label="Зарплата"
                name="salary"
                options={[
                  { value: "net", label: "На руки" },
                  { value: "gross", label: "До вычета налогов" },
                ]}
                layout="row"
              />
              <div className={styles.row}>
                <CustomInputField
                  label="от"
                  name="salaryFrom"
                  size="small"
                  layout="row"
                  type="number"
                />
                <CustomInputField
                  label="до"
                  name="salaryTo"
                  size="small"
                  layout="row"
                  type="number"
                />
              </div>
            </div>
            <div className={styles.row}>
              <CustomInputField label="Регион" name="region" required />
              <CustomInputField
                label="Адрес"
                name="address"
                required
                size="large"
              />
              <CustomInputField
                label="Станция метро, МЦД"
                name="metroStation"
              />
            </div>
            <div className={styles.row}>
              <CustomInputField
                label="Опыт работы"
                name="professionalExperience"
                required
              />
              <CustomSelectField
                label="График работы"
                name="workSchedule"
                required
                options={[
                  { value: "full-time", label: "Полный день" },
                  { value: "shift-5-2", label: "Сменный 5/2" },
                  { value: "shift-2-2", label: "Сменный 2/2" },
                ]}
              />
              <CustomRadioField
                label="Тип занятости"
                name="employmentType"
                options={[
                  { value: "full-time", label: "Полная занятость" },
                  { value: "part-time", label: "Частичная занятость" },
                  { value: "internship", label: "Стажировка" },
                ]}
                layout="column"
                required
              />
            </div>
          </section>
          <section className={styles.form}>
            <div className={styles.column}>
              <CustomTextAreaField
                label="Функциональные обязанности"
                name="responsibilities"
                placeholder="Какую работу будет выполнять сотрудник"
              />
              <CustomTextAreaField
                label="Пожелания к кандидату"
                name="candidateRequirements"
                placeholder="Ключевые навыки, достижения"
              />
              <CustomTextAreaField
                label="Преимуществом будет"
                name="advantages"
                placeholder="Дополнительные специальные навыки"
              />
              <CustomTextAreaField
                label="Мы предлагаем"
                name="benefits"
                readOnly={true}
                defaultValue={`• Дружный коллектив, интересные задачи и возможность быть услышанным;
              • Приобретение навыков работы в большой, разветвлённой и сложноподчинённой структуре, задействованной в сфере ИТ;
              • Оформление в соответствии с ТК РФ;
              • Полностью официальная заработная плата`}
              />
            </div>
          </section>
          <div className={styles.buttonWrapper}>
            <CustomButton text="Сохранить" type="submit" variant="filled" />
            <CustomButton
              text="Отменить"
              type="button"
              variant="outlined"
              onClick={() => navigate("/requests")}
            />
          </div>
        </Form>
      </Formik>
    </>
  );
};
