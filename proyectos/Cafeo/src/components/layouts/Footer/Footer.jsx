import styles from "./Footer.module.css";

const footerSections = [
  {
    title: "Sobre nosotros",
    links: [
      "Nuestro Impacto",
      "Nuestro Café",
      "Impacto Social",
      "Para Inversores",
    ],
  },
  {
    title: "Servicio al Cliente",
    links: [
      "Ayuda en Línea",
      "Preguntas Frecuentes",
      "Localizar Tienda",
      "Contacto",
    ],
  },
  {
    title: "Responsabilidad",
    links: [
      "Abastecimiento Ético",
      "Medio Ambiente",
      "Compromiso Comunitario",
      "Informe de Responsabilidad",
    ],
  },
  {
    title: "Empleos",
    links: [
      "Oportunidades y Vida",
      "Cultura de Trabajo",
      "Beneficios para Empleados",
      "Diversidad e Inclusión",
    ],
  },
];

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__main}>
        {footerSections.map((section, index) => (
          <div key={index} className={styles.footer__section}>
            <h3 className={styles.footer__title}>{section.title}</h3>
            <ul className={styles.footer__links}>
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className={styles.footer__link}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.footer__bottom}>
        <div className={styles.footer__social}>
          <a
            href="#"
            aria-label="Facebook"
            className={styles.footer__socialIcon}
          >
            <span>f</span>           </a>
          <a
            href="#"
            aria-label="Instagram"
            className={styles.footer__socialIcon}
          >
            <span>ig</span> 
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className={styles.footer__socialIcon}
          >
            <span>𝕏</span> 
          </a>
        </div>
        <div className={styles.footer__copyright}>
          © 2023 - {date} Cafeo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
