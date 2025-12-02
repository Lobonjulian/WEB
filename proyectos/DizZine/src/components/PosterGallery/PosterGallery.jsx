import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { citiesData } from "@constants/citiesData";
import CityPoster from "../CityPoster/CityPoster";

import styles from "./PosterGallery.module.css";

const PosterGallery = forwardRef(
  ({ onBackgroundChange, onIndexChange }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const galleryRef = useRef(null);

    useImperativeHandle(ref, () => ({
      scrollToPoster: (index) => {
        const gallery = galleryRef.current;
        if (!gallery) return;

        gallery.scrollTo({
          top: index * window.innerHeight,
          behavior: "smooth",
        });
      },
    }));

    useEffect(() => {
      const gallery = galleryRef.current;
      if (!gallery) return;

      const handleScroll = () => {
        const scrollTop = gallery.scrollTop;
        const windowHeight = window.innerHeight;

        const newIndex = Math.round(scrollTop / windowHeight);

        setCurrentIndex(newIndex);

        if (onIndexChange) {
          onIndexChange(newIndex);
        }
      };

      gallery.addEventListener("scroll", handleScroll);

     setTimeout(() => handleScroll(), 100);

      return () => gallery.removeEventListener("scroll", handleScroll);
    }, [onBackgroundChange, onIndexChange]);

    return (
      <div className={styles.gallery}>
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
            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{
                  height: `${((currentIndex + 1) / citiesData.length) * 100}%`,
                }}
              />
            </div>
            <span className={styles.progressText}>
              {currentIndex + 1} / {citiesData.length}
            </span>
          </div>
        </div>
      </div>
    );
  }
);

export default PosterGallery;
