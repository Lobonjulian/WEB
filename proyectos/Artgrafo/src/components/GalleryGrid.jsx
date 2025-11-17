import { artworks } from "../data/artworks";
import ArtworkCard from "./ArtworkCard";
import styles from "../style/Components.module.css";

const GalleryGrid = () => {
  return (
    <div className={styles.grid}>
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
};

export default GalleryGrid;
