
import Button from "@common/Button/Button";

import styles from "./HamburgerButton.module.css";

const HamburgerButton = ({ isOpen = false, onToggle, className = "" }) => {
  return (
    <Button
      className={`${styles.hamburger} ${
        isOpen ? styles.hamburgerActive : ""
      } ${className}`}
      onClick={onToggle}
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={isOpen}
      type="button"
    >
      <span className={styles.hamburger__line}></span>
      <span className={styles.hamburger__line}></span>
      <span className={styles.hamburger__line}></span>
    </Button>
  );
};

export default HamburgerButton;
