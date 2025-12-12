import { useState } from "react";
import HamburgerButton from "./HamburgerButton/HamburgerButton.jsx";
import HeaderActions from "./HeaderActions/HeaderActions";
import Navbar from "./Navbar/Navbar";

import styles from "./Header.module.css";

const navItem = [
  { id: 1, label: "menu", href: "/menu" },
  { id: 2, label: "Recompensas", href: "/reward" },
  { id: 3, label: "Tarjeta Regalo", href: "/target" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={styles.nav}>
        <Navbar menuItem={navItem} />
        <div className={styles.navDesktop}>
          <HeaderActions />
        </div>

        <HamburgerButton
          isOpen={isMenuOpen}
          onClick={toggleMenu}
          ariaLabel={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        />

        {isMenuOpen && (
          <div className={styles.navMobile}>
            <HeaderActions />
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
