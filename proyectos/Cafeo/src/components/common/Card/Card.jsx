import Button from "../Button/Button";
import styles from "./Card.module.css";

const Card = ({
  title,
  description,
  imagen,
  number,
  button = false,
  variant,
}) => {
  return (
    <aside className={`${styles.card} ${styles[`card--${variant}`]}`}>
        {imagen ? (
          <img
            src={imagen}
            alt={title}
            loading="lazy"
            className={styles.card__img}
          />
        ) : (
          <span className={styles.card__number}>{number}</span>
        )}
        <h4 className={styles.card__title}>{title}</h4>
        <p className={styles.card__description}>{description}</p>
        {button && <Button variant="ghost">Saber mas</Button>}
    </aside>
  );
};

export default Card;
