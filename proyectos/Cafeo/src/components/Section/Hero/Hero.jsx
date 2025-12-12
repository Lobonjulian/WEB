import Button from "../../common/Button/Button";

import styles from "./Hero.module.css";

const Hero = ({ image }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <h1>CAFÉ GRATIS A UN TOQUE DE DISTANCIA</h1>
        <p>Únete ahora para comenzar a ganar Recompensas</p>
        <Button>Únete ahora</Button>
        <p>
          O <Button variant="ghost">inicia sesión</Button> en la app para tener
          una mejor experiencia
        </p>
      </div>
      {image && (
        <div className={styles.hero__image}>
          <img src={image} alt="placeholder" loading="lazy" />
        </div>
      )}
    </section>
  );
};

export default Hero;
