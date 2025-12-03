import { useEffect, useState } from "react";

const useMobileQuery = (query = "(max-width: 768px)") => {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);

    const updateMatches = () => {
      setMatches(media.matches);
    };

    updateMatches();

    media.addEventListener("change", updateMatches);

    return () => media.removeEventListener("change", updateMatches);
  }, [query]);

  return matches;
};

export default useMobileQuery;
