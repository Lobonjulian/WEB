import styles from "../style/Components.module.css";

const ArtworkImage = ({ artwork, variant = "card" }) => {
  return (
    <div className={`${styles.imageWrapper} ${styles[variant]}`}>
      <img
        src={artwork.image}
        alt={artwork.title}
        className={styles.image}
        loading={variant === "card" ? "lazy" : "eager"}
      />
    </div>
  );
};

export default ArtworkImage;
