import { footerColumns, footerInfo } from "./footerData";
import FooterColumn from "./FooterColumn";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
import Logo from "@common/Logo/Logo";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.footerTop}>
          <p className={styles.footerDescription}>{footerInfo.tagline}</p>
          <Logo textWith={false} />
        </section>

        <section className={styles.footerColumns}>
        {footerColumns.map((column) => {
          <FooterColumn key={column.id} column={column} />
        })}
        </section>

        <section className={styles.footerBottom}>
        <FooterCopyright/>

      </section>  
      </div>
    </footer>
  );
};

export default Footer;
