import styles from "../style/Components.module.css";

const ArtworkInfo = ({ artwork, variant = "card" }) => {
  return (
    <div className={`${styles.info} ${styles[variant]}`}>
      <h3 className={styles.title}>{artwork.title}</h3>
      <p className={styles.artist}>
        <strong>{artwork.artist}</strong> • {artwork.year}
        {artwork.medium && ` • ${artwork.medium} `}
      </p>
      {variant === "modal" && artwork.description && (
        <p className={styles.description}>{artwork.description}</p>
      )}
    </div>
  );
};

export default ArtworkInfo;
