import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PosterGallery from "./components/PosterGallery/PosterGallery";

function App() {
  const [currentBgColor, setCurrentBgColor] = useState("#26a2d2");

  const handleBackgroundChange = (color) => {
    setCurrentBgColor(color);
  };

  return (
    <div className="app" style={{ backgroundColor: currentBgColor }}>
      <Navbar />
      <main className="content">
        <PosterGallery onBackgroundChange={handleBackgroundChange} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
