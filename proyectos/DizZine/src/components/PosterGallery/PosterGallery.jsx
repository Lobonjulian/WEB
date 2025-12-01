import { useEffect, useRef, useState } from "react";
import { citiesData } from "../../constants/citiesData";
import CityPoster from "../CityPoster/CityPoster";

import styles from "./PosterGallery.module.css";

const PosterGallery = ({ onBackgroundChange }) => {
  const galleryRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const handleScroll = () => {
      const scrollTop = gallery.scrollTop;
      const windowHeight = window.innerHeight;

      const newIndex = Math.round(scrollTop / windowHeight);
      setCurrentIndex(newIndex);

      const currentPoster = citiesData[newIndex];
      if (currentPoster && onBackgroundChange) {
        onBackgroundChange(currentPoster.backgroundColor || "#26a2d2");
      }
    };

    gallery.addEventListener("scroll", handleScroll);
    return () => gallery.removeEventListener("scroll", handleScroll);
  }, [onBackgroundChange]);

  const scrollToPoster = (index) => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    gallery.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryNavigation}>
        {citiesData.map((city, index) => (
          <button
            key={city.cityName}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => scrollToPoster(index)}
            aria-label={`Ir a ${city.cityName}`}
          >
            <span className={styles.dotCity}>{city.cityName}</span>
          </button>
        ))}
      </div>

      {
        <div ref={galleryRef} className={styles.galleryVertical}>
          {citiesData.map((city, index) => (
            <div
              key={city.cityName}
              className={styles.posterWrapper}
              data-index={index}
            >
              <CityPoster
                city={city}
                onColorExtracted={onBackgroundChange}
                isActive={index === currentIndex}
              />
            </div>
          ))}

          <div className={styles.progressIndicator}>
            <div
              className={styles.progressBar}
              style={{
                height: `${((currentIndex + 1) / citiesData.length) * 100}%`,
              }}
            />
          </div>
        </div>
      }
    </div>
  );
};

export default PosterGallery;
