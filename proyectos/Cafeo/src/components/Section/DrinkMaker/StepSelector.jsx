import Button from '@common/Button/Button';
import styles from './DrinkMaker.module.css';

const StepSelector = ({
  title,
  items = [],
  onSelect,
  selected,
  onNext,
  multiple = false,
}) => {
  const isSelected = (id) => {
    if (multiple) return selected.includes(id);
    return selected === id;
  };

  const hasSelected = multiple ? selected.length > 0 : Boolean(selected);

  return (
    <section className={styles.step}>
      <h4 className={styles.step__title}>{title}</h4>

      <div className={styles.step__grid}>
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`${styles.step__item} ${
              isSelected(item.id) ? styles[`step__item--active`] : ''
            }`}
            onClick={() => onSelect(item.id)}
          >
            <span className={styles.step__item__icon}>{item.icon}</span>
            <span className={styles.step__item__label}>{item.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.step__actions}>
        <Button onClick={onNext} disabled={!hasSelected}>
          Siguiente
        </Button>
      </div>
    </section>
  );
};

export default StepSelector;
