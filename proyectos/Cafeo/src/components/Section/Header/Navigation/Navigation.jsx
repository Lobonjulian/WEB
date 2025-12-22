import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = ({ items, onNavigate }) => {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate;
    }
  };
  return (
    <nav className={styles.navigation}>
      <ul className={styles.menu}>
        {items.map((item) => (
          <li key={item.id} className={styles.menu__item}>
            <NavLink
              to={item.href}
              onClick={handleClick}
              className={({ isActive }) =>
                `${styles.menu__link} ${
                  isActive ? styles.menu__linkActive : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
