import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <section className={styles.footer__legal}>
          <p>
            DizZine es una entrega de poster de las ciudades de Colombia sobre
            charlas de diseño, con el fin de tener la oportunidad de tomar las
            correcta decision en diseño
          </p>
          <p> {date} Publicado por estudios JulitoMuxik.inc</p>
          <a>Política de privacidad</a>
        </section>
        <section className={styles.footer__edition}>
          <p>edition#5</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
