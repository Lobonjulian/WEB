import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

import styles from "../style/header.module.css";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

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
      <button
        onClick={toggleTheme}
        aria-label={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
        className={styles.themeToggle}
      >
        {theme === "light" ? (
          <span aria-hidden="true">🌑</span>
        ) : (
          <span aria-hidden="true">🌕</span>
        )}
      </button>
    </header>
  );
};

export default Header;
