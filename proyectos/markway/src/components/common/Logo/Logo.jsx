import markwayLogo from "/markway.svg";

import styles from "./Logo.module.css";

const Logo = ({ textWith = true }) => {
  return (
    <div className={styles.logo}>
      <img
        src={markwayLogo}
        className={styles.logoImg}
        alt="Markway logo"
        loading="eager"
      />
      {textWith && <span className={styles.logoText}>Markway</span>}
    </div>
  );
};

export default Logo;
