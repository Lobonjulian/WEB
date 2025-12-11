import styles from "./Button.module.css";

const Button = ({
  variant = "primary",
  type = "button",
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[`btn--${variant}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
