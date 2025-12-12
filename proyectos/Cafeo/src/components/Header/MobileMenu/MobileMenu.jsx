import Navbar from "../Navbar/Navbar";
import styles from "./MobileMenu.module.css";

const MobileMenu = ({ menuItem, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.mobileMenu__content}>
        <Navbar menuItem={menuItem} />
      </div>
      <div className="">

      </div>
    </div>
  );
};

export default MobileMenu;
