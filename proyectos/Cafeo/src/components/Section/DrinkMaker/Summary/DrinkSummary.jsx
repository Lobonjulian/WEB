import styles from './DrinkMaker.module.css';

const DrinkSummary = ({ state }) => {
  const { base, milk, extras } = state;

  return (
    <select className={styles.summary}>
      <h4 className={styles.summary__title}>Resumen de tu bebida</h4>
      <ul className={styles.summary__list}>
        <li>
          <strong>Base: {base?.name}</strong>
        </li>
        <li>
          <strong>Leche: {milk?.name}</strong>
        </li>
        <li>
          <strong>Extras:</strong>
          {extras.length > 0 ? extras.join(', ') : 'Sin extras'}
        </li>
      </ul>
    </select>
  );
};

export default DrinkSummary;
