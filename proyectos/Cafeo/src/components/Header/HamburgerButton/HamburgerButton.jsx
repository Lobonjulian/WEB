import styles from "./HamburgerButton.module.css";

const HamburgerButton = ({
  isOpen = false,
  onClick,
  ariaLabel = "Menú",
  className = "",
}) => {
  return (
    <button
      className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ''} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
    >
      <span className={styles.hamburgerLine}></span>
      <span className={styles.hamburgerLine}></span>
      <span className={styles.hamburgerLine}></span>
    </button>
  );
};

export default HamburgerButton;
