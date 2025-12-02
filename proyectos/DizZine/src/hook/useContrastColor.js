import { useMemo } from "react";

function useContrastColor(backgroundColor) {
  return useMemo(() => {
    if (!backgroundColor) return "#000000";

    let r, g, b;

    if (backgroundColor.startsWith("#")) {
      const hex = backgroundColor.substring(1);
      if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
      } else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
      } else {
        return "#000000";
      }
    } else if (backgroundColor.startsWith("rgb")) {
      const rgb = backgroundColor.match(/\d+/g);
      if (!rgb || rgb.length < 3) return "#000000";
      r = parseInt(rgb[0]);
      g = parseInt(rgb[1]);
      b = parseInt(rgb[2]);
    } else {
      return "#000000";
    }
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.5 ? "#000000" : "#ffffff";
  }, [backgroundColor]);
}

export default useContrastColor;
