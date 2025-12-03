import styles from "./Button.module.css";

const Button = ({
  className = "",
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
