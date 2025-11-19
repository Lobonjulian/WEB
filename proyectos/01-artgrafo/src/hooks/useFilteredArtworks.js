import { useMemo } from "react";
import { artworks } from "../data/artworks";

export const useFilteredArtworks = ({
  artist = "",
  technique = "",
  year = "",
}) => {
  return useMemo(() => {
    return artworks.filter((artwork) => {
      const matchesArtist =
        !artist || artwork.artist.toLowerCase() === artist.toLowerCase();
      const matchesTechnique =
        !technique ||
        artwork.technique.toLowerCase().includes(technique.toLowerCase());
      const matchesYear = !year || artwork.year.toString() === year;
      return matchesArtist && matchesTechnique && matchesYear;
    });
  }, [artist, technique, year]);
};
