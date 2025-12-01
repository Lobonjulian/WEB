import { useEffect, useState } from "react";
import useDominantColor from "../../hook/useDominantColor";

import styles from "./CityPoster.module.css";

const CityPoster = ({ city, onColorExtracted, isActive }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const dominantColor = useDominantColor(imageLoaded ? city.imageUrl : null);

  // Pasar el color a la App cuando este poster está activo
  useEffect(() => {
    if (isActive && imageLoaded && dominantColor && onColorExtracted) {
      console.log("Color extraído y pasado a App:", dominantColor);
      onColorExtracted(dominantColor);
    }
  }, [isActive, imageLoaded, dominantColor, onColorExtracted]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section
      className={styles.poster}
      style={{ backgroundColor: imageLoaded ? dominantColor : "#26a2d2" }}
    >
      <div className={styles.posterContainer}>
        <div className={styles.posterHeader}>
          <span className={styles.population}>{city.population}</span>
        </div>

        <div className={styles.posteImage}>
          <img
            src={city.imageUrl}
            alt={`${city.cityName}, ${city.department}`}
            className={styles.posteImage__img}
            loading="lazy"
            onLoad={handleImageLoad}
          />
        </div>

        <div className={styles.posterInfo}>
          <h3 className={styles.posterInfo__title}>{city.cityName}</h3>
          <p className={styles.posterInfo__description}>{city.department}</p>
          <p className={styles.posterInfo__description}>
            Población aprox: {city.population}
          </p>
        </div>

        <div className={styles.posterFooter}>
          <button className={styles.btn}>Publicar aquí</button>
          <p className={styles.posterInfo__description}>
            o edita <a>aquí</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CityPoster;
