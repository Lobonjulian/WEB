import HeaderActions from "./HeaderActions/HeaderActions";
import HeaderNav from "./HeaderNav/HeaderNav";
import Logo from "../common/Logo/Logo";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <section className={styles.headerLogo}>
          <Logo />
        </section>

        <HeaderNav />

        <HeaderActions />
      </div>
    </header>
  );
};

export default Header;
