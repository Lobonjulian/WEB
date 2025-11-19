import { useState, useEffect } from "react";

export const useFavorites = () => {
  // Leer favoritos iniciales desde localStorage
  const getInitialFavorites = () => {
    try {
      const saved = localStorage.getItem("artgrafo_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn("Error al leer favoritos:", e);
      return [];
    }
  };

  const [favorites, setFavorites] = useState(getInitialFavorites());

  // Guardar en localStorage cuando cambie
  useEffect(() => {
    try {
      localStorage.setItem("artgrafo_favorites", JSON.stringify(favorites));
    } catch (e) {
      console.warn("Error al guardar favoritos:", e);
    }
  }, [favorites]);

  // Sincronizar entre pestañas
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "artgrafo_favorites") {
        try {
          const newValue = e.newValue ? JSON.parse(e.newValue) : [];
          setFavorites(newValue);
        } catch (e) {
          console.warn("Error al parsear favoritos:", e);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Alternar favorito
  const toggleFavorite = (artworkId) => {
    setFavorites((prev) =>
      prev.includes(artworkId)
        ? prev.filter((id) => id !== artworkId)
        : [...prev, artworkId]
    );
  };

  // Verificar si es favorito
  const isFavorite = (artworkId) => favorites.includes(artworkId);

  // Limpiar favoritos (opcional)
  const clearFavorites = () => {
    setFavorites([]);
  };

  return { favorites, toggleFavorite, isFavorite, clearFavorites };
};
