import Card from "../../common/Card/Card";

import styles from "./Features.module.css";

const Features = ({ title, description, items = [] , variant}) => {
  return (
    <section className={styles.feature}>
      <header className={styles.feature__title}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </header>

      <div className={styles.feature__card}>
       {items.map((item, index) => (
        <Card key={index} variant={variant} {...item} />
       ))}
      </div>
    </section>
  );
};

export default Features;
