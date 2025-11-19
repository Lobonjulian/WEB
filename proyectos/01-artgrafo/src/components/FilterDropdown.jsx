import styles from "../style/Components.module.css";

export default function FilterDropdown({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Seleccionar...",
}) {
  return (
    <div className={styles.dropdown}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <select
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.select}
        aria-label={`Filtrar por ${label}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
