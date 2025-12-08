import { useState } from "react";
import Icon from "@common/Icon/Icon";

import styles from "./ResourceCard.module.css";

const ResourceCard = ({ item, type = "resource" }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (!item) return null;

  const hasImage = Boolean(item.image && item.image.trim() !== "");
  const hasIcon = Boolean(item.icon && item.icon.trim() !== "");

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article
      className={`${styles.card} ${
        type === "collection" ? styles.collectionCard : styles.resourceCard
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.cardMedia}>
        {hasImage && !imageError ? (
          <>
            <img
              src={item.image}
              alt={item.title}
              className={
                type === "collection" ? styles.image : styles.cardImage
              }
              loading="lazy"
              onError={handleImageError}
            />
            {type === "collection" && isHovered && (
              <div className={styles.imageOverlay}>
                <span className={styles.overlayText}>Ver {type}</span>
              </div>
            )}
          </>
        ) : hasIcon ? (
          <div className={styles.iconWrapper}>
            <Icon
              name={item.icon}
              size={type === "collection" ? 48 : 40}
              className={styles.customIcon}
            />
          </div>
        ) : (
          <div className={styles.placeholder}>
            <Icon name="📄" size={32} />
          </div>
        )}
      </div>

      <div className={styles.cardContent}>
        {item.tag && (
          <span
            className={`${styles.badge} ${
              hasImage ? styles.imageBadge : styles.iconBadge
            }`}
          >
            {item.tag}
          </span>
        )}
        <h3 className={styles.title}>{item.title}</h3>
        {item.description && (
          <p className={styles.description}>{item.description}</p>
        )}
        {type === "collection" && item.icon && (
          <div className={styles.meta}>
            <Icon name={item.icon} size={16} />
            <span>Colección</span>
          </div>
        )}
      </div>
    </article>
  );
};

export default ResourceCard;
