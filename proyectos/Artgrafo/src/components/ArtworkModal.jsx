import { useEffect } from "react";
import styles from "../style/Components.module.css";
import ArtworkImage from "./ArtworkImage";
import ArtworkInfo from "./ArtworkInfo";

const ArtworkModal = ({ artwork, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
      onClick={onClose}
    >
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Cerrar"
        >
          x
        </button>
      </div>
      <div className={styles.content}>
        <ArtworkImage artwork={artwork} variant="modal" />
        <ArtworkInfo artwork={artwork} variant="modal" />
      </div>
    </div>
  );
};

export default ArtworkModal;
