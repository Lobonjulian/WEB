import { useState } from "react";
import styles from "./CityPoster.module.css";
import useDominantColor from "../../hook/useDominantColor";

const CityPoster = ({ city }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const dominantColor = useDominantColor(imageLoaded ? city.imageUrl : null);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section
      className={styles.poster}
      style={{ backgroundColor: imageLoaded ? dominantColor : "#2c3e50" }}
    >
      <div className={styles.poster__container}>
        <div className={styles.poster__header}>
          <span className={styles.population}>{city.population}</span>
        </div>

        <div className={styles.poster__image}>
          <img
            src={city.imageUrl}
            alt={`${city.cityName}, ${city.department}`}
            className={styles.poster__image__img}
            loading="lazy"
            onLoad={handleImageLoad}
          />
        </div>

        <div className={styles.poster__info}>
          <h3 className={styles.poster__info__title}>{city.cityName}</h3>
          <p>{city.department}</p>
          <p>Población aprox: {city.population}</p>
        </div>

        <div className={styles.poster__footer}>
          <button className={styles.btn}>Publicar aquí</button>
          <p>
            o edita <a>aquí</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CityPoster;
