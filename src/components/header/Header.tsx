import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { ROUTES } from "@shared/routes";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.circle}></div>
        <nav className={styles.navigation}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <NavLink
                to={ROUTES.REQUESTS}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.menuLink} ${styles.active} ${styles.menuItemActive}`
                    : styles.menuLink
                }
              >
                <span className={styles.menuText}>Все заявки</span>
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                to={ROUTES.HOME}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.menuLink} ${styles.active} ${styles.menuItemActive}`
                    : styles.menuLink
                }
              >
                <span className={styles.menuText}>Создание заявки</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
