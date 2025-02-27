import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.circle}></div>
        <nav className={styles.navigation}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <NavLink
                to="/requests"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.menuLink} ${styles.active} ${styles.menuItemActive}`
                    : styles.menuLink
                }
              >
                Все заявки
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.menuLink} ${styles.active} ${styles.menuItemActive}`
                    : styles.menuLink
                }
              >
                Создание заявки
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
