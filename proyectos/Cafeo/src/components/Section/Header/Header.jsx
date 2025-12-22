import { useEffect, useState } from "react";
import HamburgerButton from "./HamburgerButton/HamburgerButton.jsx";
import HeaderActions from "./HeaderActions/HeaderActions";
import Navigation from "./Navigation/Navigation";
import Logo from "@common/Logo/Logo";

import styles from "./Header.module.css";

const navItem = [
  { id: 1, label: "menu", href: "/menu" },
  { id: 2, label: "Recompensas", href: "/reward" },
  { id: 3, label: "Tarjeta Regalo", href: "/gift-card" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__left}>
          <Logo />
          <Navigation items={navItem} />
        </div>
        <div className={styles.navbar__right}>
          <HeaderActions />
          <HamburgerButton isOpen={isMenuOpen} onToggle={toggleMenu} />
        </div>

        {isMenuOpen && (
          <div className={styles.navbar__mobile}>
            <Navigation items={navItem} onNavigate={closeMenu} />
            <HeaderActions />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
