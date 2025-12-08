import { Search } from "lucide-react";
import Cta from "../Cta/Cta";

import styles from "./Sidebar.module.css";

const Sidebar = ({
  categories,
  activeCategory,
  onCategoryClick,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.search}>
        <div className={styles.searchContainer}>
          <h3 className={styles.sidebarTitle}>Buscar en la biblioteca</h3>
          <div className={styles.searchInput}>
            <Search size={20} className={styles.searchIcon} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Escribe para buscar ..."
              className={styles.input}
              aria-label="Buscar recursos"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className={styles.clearBtn}
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
          {searchQuery && (
            <p className={styles.searchHint}>
              Buscando: <strong>"{searchQuery}"</strong>
            </p>
          )}
        </div>

        <nav aria-label="Categorías de recursos">
          <ul className={styles.categoryList}>
            {categories.map((category) => (
              <li key={category.id} className={styles.categoryItem}>
                <button
                  className={`${styles.categoryButton} ${
                    activeCategory === category.id ? styles.active : ""
                  }`}
                  onClick={() => onCategoryClick(category.id)}
                  aria-current={
                    activeCategory === category.id ? "page" : undefined
                  }
                >
                  <span className={styles.categoryIcon}>{category.icon}</span>

                  <span className={styles.categoryLabel}>{category.label}</span>

                  {category.count > 0 && (
                    <span className={styles.categoryCount}>
                      {category.count}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Cta />
    </aside>
  );
};

export default Sidebar;
