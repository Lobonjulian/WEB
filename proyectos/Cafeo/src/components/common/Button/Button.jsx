import styles from './Button.module.css';

const Button = ({
  ariaLabel,
  children,
  disabled = false,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[`btn--${variant}`]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
