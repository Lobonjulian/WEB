import Logo from "../UI/Logo";

import styles from "./Navbar.module.css";

const Navbar = ({ textColor }) => {
  return (
    <nav className={styles.navbar} style={{ color: textColor }}>
      <div className={styles.navbar__container}>
        <Logo size={50} />
        <p>info@dizzine.com</p>
      </div>
    </nav>
  );
};

export default Navbar;
