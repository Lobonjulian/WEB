import styles from "../style/Components.module.css";
import ArtworkImage from "./ArtworkImage";
import ArtworkInfo from "./ArtworkInfo";

const ArtworkCard = ({ artwork, onClick }) => {
  return (
    <article
      className={styles.card}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "enter" || e.key === "") {
          onClick?.();
        }
      }}
    >
      <ArtworkImage artwork={artwork} variant="card" />
      <ArtworkInfo artwork={artwork} variant="card" />
    </article>
  );
};

export default ArtworkCard;
