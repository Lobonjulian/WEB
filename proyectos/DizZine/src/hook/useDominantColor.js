import { useEffect, useState } from "react";

const useDominantColor = (imageUrl) => {
  const [dominantColor, setDominantColor] = useState("#29a2d3");

  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();
    img.crossOrigin = "Anonymous";

    img.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0, img.width, img.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      const colorCount = {};
      let maxCount = 0;
      let dominant = "#29a2d3";

      for (let i = 0; i < pixels.length; i += 80) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        if (r < 50 && g < 50 && b < 50) continue;
        if (r > 230 && g > 230 && b > 230) continue;

        const color = `rgb(${r},${g},${b})`;
        colorCount[color] = (colorCount[color] || 0) + 1;

        if (colorCount[color] > maxCount) {
          maxCount = colorCount[color];
          dominant = color;
        }
      }
      const rgb = dominant.match(/\d+/g);
      if (rgb && rgb.length === 3) {
        const hex =
          "#" +
          parseInt(rgb[0]).toString(16).padStart(2, "0") +
          parseInt(rgb[1]).toString(16).padStart(2, "0") +
          parseInt(rgb[2]).toString(16).padStart(2, "0");
        setDominantColor(hex);
      }
    };

    img.onerror = function () {
      console.warn(
        "No se pudo cargar la imagen para ser analizada y obtener color:",
        imageUrl
      );
      setDominantColor("#de3e28");
    };
    img.src = imageUrl;
  }, [imageUrl]);

  return dominantColor;
};

export default useDominantColor;
