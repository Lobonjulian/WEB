import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import HeaderActions from "./HeaderActions/HeaderActions";
import HeaderNav from "./HeaderNav/HeaderNav";
import Logo from "@common/Logo/Logo";
import useMobileQuery from "@hooks/useMobile";

import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobileQuery("(max-width: 768px)");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <section className={styles.headerLogo}>
          <Logo />
        </section>

        {isMobile && (
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        <div
          className={`${styles.navWrapper} ${
            isMenuOpen ? styles.menuOpen : ""
          }`}
        >
          <HeaderNav onNavClick={closeMenu} />
          <HeaderActions />
        </div>

        {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}
      </div>
    </header>
  );
};

export default Header;
