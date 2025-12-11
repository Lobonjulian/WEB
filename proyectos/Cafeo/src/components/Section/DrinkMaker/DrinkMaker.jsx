import styles from "./DrinkMaker.module.css";

const customizations = [
  {
    id: 1,
    icon: "☕",
    title: "Shot extra de espresso",
    description: "Más energía para tu día",
  },
  {
    id: 2,
    icon: "🥛",
    title: "Leche de almendra",
    description: "Opción sin lactosa",
  },
  {
    id: 3,
    icon: "🎨",
    title: "Toque de sabor",
    description: "Vainilla, caramelo o avellana",
  },
  {
    id: 4,
    icon: "🧊",
    title: "Hielo extra",
    description: "Refrescante en verano",
  },
];

const DrinkMaker = () => {
  return (
    <section className={styles.drinkMaker}>
      <div className={styles.drinkMaker__grid}>
        {customizations.map((item) => (
          <div key={item.id} className={styles.drinkMaker__card}>
            <div className={styles.drinkMaker__icon}>{item.icon}</div>
            <h3 className={styles.drinkMaker__cardTitle}>{item.title}</h3>
            <p className={styles.drinkMaker__cardDescription}>
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className={styles.drinkMaker__header}>
        <h2 className={styles.drinkMaker__title}>Personaliza tu bebida</h2>
        <p className={styles.drinkMaker__description}>
          Haz tu bebida justo como te gusta con un shot extra de espresso, leche
          de almendra o un toque de tu sabor favorito.
        </p>
      </div>
    </section>
  );
};

export default DrinkMaker;
