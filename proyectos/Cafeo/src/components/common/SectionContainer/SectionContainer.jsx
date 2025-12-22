import styles from './SectionContainer.module.css';

const SectionContainer = ({ title, subtitle, variant, children }) => {
  return (
    <section
      className={`${styles.sectionContainer} ${
        variant ? styles[`sectionContainer--${variant}`] : ''
      }`}
      data-variant={variant}
    >
      <div className={styles.sectionContainer__header}>
        <h2 className={styles.sectionContainer__title}>{title}</h2>
        {subtitle && (
          <p className={styles.sectionContainer__subtitle}>{subtitle}</p>
        )}
      </div>

      <div className={styles.sectionContainer__content}>{children}</div>
    </section>
  );
};

export default SectionContainer;
