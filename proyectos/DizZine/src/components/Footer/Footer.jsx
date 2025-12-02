import { useEffect, useState } from "react";
import { citiesData } from "@constants/citiesData";

import styles from "./Footer.module.css";

const Footer = ({ textColor, onNavigate, currentIndex }) => {
  const [isMobile, setIsMobile] = useState(false);

  const date = new Date().getFullYear();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerHeight <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNavClick = (index) => {
    if (onNavigate) {
      onNavigate(index);
    }
  };

  return (
    <footer className={styles.footer} style={{ color: textColor }}>
      <div className={styles.footerContainer}>
        <section className={styles.footerLegal}>
          <p>
            DizZine es una entrega de poster de las ciudades de Colombia sobre
            charlas de diseño, con el fin de tener la oportunidad de tomar las
            correcta decision en diseño
          </p>
          <p> {date} Publicado por estudios JulitoMuxik.inc</p>
          <a
            href="#privacy"
            style={{ color: textColor }}
            className={styles.privacyLink}
          >
            Política de privacidad
          </a>
        </section>

        <section className={styles.footerNav}>
          <nav className={styles.footerNavigation}>
            {citiesData.map((city, index) => (
              <button
                key={city.cityName}
                className={`${styles.btnCity} ${
                  index === currentIndex ? styles.activeBtnCity : ""
                }`}
                onClick={() => handleNavClick(index)}
                aria-label={`Ir a ${city.cityName}`}
                style={{
                  color: index === currentIndex ? "#98a2c0ff" : textColor,
                  backgroundColor:
                    index === currentIndex ? textColor : "transparent",
                }}
              >
                {isMobile ? (
                  <span className={styles.navNumber}>{index + 1}</span>
                ) : (
                  <>
                    <span className={styles.navNumber}>{index + 1}</span>
                    <span className={styles.navCity}>{city.cityName}</span>
                  </>
                )}
              </button>
            ))}
          </nav>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
