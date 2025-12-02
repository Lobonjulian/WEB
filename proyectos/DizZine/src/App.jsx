import { useMemo, useRef, useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PosterGallery from "./components/PosterGallery/PosterGallery";

function App() {
  const [currentBgColor, setCurrentBgColor] = useState("#de3e28");
  const [currentIndex, setCurrentIndex] = useState(0);
  const PosterGalleryRef = useRef(null);

  const handleBackgroundChange = (color) => {
    setCurrentBgColor(color);
  };

  const textColor = useMemo(() => {
    if (!currentBgColor.startsWith("#")) return "#1a1a1a";

    const hex = currentBgColor.substring(1);
    if (hex.length !== 6) return "#1a1a1a";

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#1a1a1a" : "#ffffff";
  }, [currentBgColor]);

  const handleNavigate = (index) => {
    setCurrentIndex(index);

    if (PosterGalleryRef.current) {
      PosterGalleryRef.current.scrollToPoster(index);
    }
  };

  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="app"
      style={{
        backgroundColor: currentBgColor,
        transition: "background-color 0.5s ease",
      }}
    >
      <Navbar textColor={textColor} />
      <main className="content">
        <PosterGallery
          ref={PosterGalleryRef}
          onBackgroundChange={handleBackgroundChange}
          onIndexChange={handleIndexChange}
        />
      </main>
      <Footer
        textColor={textColor}
        currentIndex={currentIndex}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default App;
