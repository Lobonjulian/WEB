import styles from "./FooterColumn.module.css";

const FooterColumn = ({ column }) => {
  return (
    <div className={styles.column}>
      <h3 className={styles.title}>{column.title}</h3>
      <ul className={styles.list}>
        {column.links.map((link) => (
          <li key={link.id} className={styles.item}>
            <a href={link.href} className={styles.link} aria-label={link.text}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
