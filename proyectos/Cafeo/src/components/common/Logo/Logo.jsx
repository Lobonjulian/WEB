import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./Logo.module.css";

const Logo = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={styles.logo}>
      <Link
        to="/"
        aria-label="Cafeo - Volver al inicio"
        className={styles.logo__link}
      >
        {imgError ? (
          <span className={styles.logo__fallback}>CAFEO</span>
        ) : (
          <img
            className={styles.logo__img}
            src="/cafeo.svg"
            alt="Cafeo"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </Link>
    </div>
  );
};

export default Logo;
