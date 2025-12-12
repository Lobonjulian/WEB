import { NavLink } from "react-router-dom";
import Logo from "@common/Logo/Logo";

import styles from "./Navbar.module.css";

const Navbar = ({ menuItem }) => {
  return (
    <section className={styles.navbar}>
      <Logo />

      <ul className={styles.menu}>
        {menuItem.map((item) => (
          <li key={item.id} className={styles.menu__item}>
            <NavLink
              to={item.href}
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
    </section>
  );
};

export default Navbar;
