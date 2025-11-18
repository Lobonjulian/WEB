import styles from "../style/Components.module.css";
import ArtworkImage from "./ArtworkImage";
import ArtworkInfo from "./ArtworkInfo";
import { useFavorites } from "../hooks/useFavorites";

const ArtworkCard = ({ artwork, onClick }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

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
      <div className={styles.imageWrapper}>
        <ArtworkImage artwork={artwork} variant="card" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(artwork.id);
          }}
          aria-label={
            isFavorite(artwork.id)
              ? "quitar de favoritos"
              : "añadir a favoritos"
          }
          className={styles.favoriteButton}
        >
          <span aria-hidden="true">{isFavorite(artwork.id) ? "❤️" : "🤍"}</span>
        </button>
      </div>
        <ArtworkInfo artwork={artwork} variant="card" />
    </article>
  );
};

export default ArtworkCard;
