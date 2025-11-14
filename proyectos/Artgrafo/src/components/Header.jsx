import styles from "../style/header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : ""]
              .filter(Boolean)
              .join(" ")
          }
          end
        >
          Inicio
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : ""]
              .filter(Boolean)
              .join(" ")
          }
          
        >
          Galería
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            [styles.link, isActive ? styles.active : ""]
              .filter(Boolean)
              .join(" ")
          }
        >
          Contacto
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
