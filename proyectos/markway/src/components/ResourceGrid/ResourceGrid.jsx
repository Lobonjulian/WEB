import styles from "./ResourceGrid.module.css";

const ResourceGrid = ({
  items,
  title = "Recursos Destacados",
  subtitle,
  renderItem,
}) => {
  if (!items || items.length === 0) {
    return (
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <p className={styles.emptyMessage}>
            {"No hay elementos disponibles"}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.gridSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.id} className={styles.gridItem}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceGrid;
