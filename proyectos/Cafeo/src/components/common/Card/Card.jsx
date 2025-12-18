import styles from "./Card.module.css";

const Card = ({ title, description, media, actions, variant }) => {
  return (
    <article className={`${styles.card} ${styles[`card--${variant}`]}`}>
      {media && <div className={styles.card__media}>{media}</div>}

      <div className={styles.card__content}>
        <h4 className={styles.card__title}>{title}</h4>
        <p className={styles.card__description}>{description}</p>
      </div>

      {actions && <div className={styles.card__actions}>{actions}</div>}
    </article>
  );
};

export default Card;
