import styles from "../style/Components.module.css";

const ArtworkCard = ({ artwork }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={artwork.image}
          alt={artwork.title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{artwork.title}</h3>
        <p className={styles.artist}>
          {artwork.artist} • {artwork.year}
        </p>
      </div>
    </article>
  );
};

export default ArtworkCard;
