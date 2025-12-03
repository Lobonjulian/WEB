import { navigationLinks } from "../navigationData";
import styles from "./HeaderNav.module.css";

const HeaderNav = ({ onNavClick }) => {
  const handleClick = () => {
    if (onNavClick) {
      onNavClick;
    }
  };

  return (
    <nav className={styles.headerNav}>
      <ul className={styles.headerNavList}>
        {navigationLinks.map((item) => (
          <li key={item.id} className={styles.headerNavItem}>
            <a
              href={item.href}
              className={styles.headerNavLink}
              onClick={handleClick}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
