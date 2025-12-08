import Button from "@common/Button/Button";

import styles from "./Cta.module.css";

const Cta = () => {
  return (
    <div className={styles.cta}>
      <h3 className={styles.ctaTitle}>Contribuye a Markway</h3>
      <p className={styles.ctaSubtitle}>
        ¿Tienes recursos de marketing o noticias?
      </p>
      <Button>Enviar un Recurso </Button>
    </div>
  );
};

export default Cta;
