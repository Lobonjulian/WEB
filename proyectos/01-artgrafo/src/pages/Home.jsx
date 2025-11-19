import FilterDropdown from "../components/FilterDropdown";
import GalleryGrid from "../components/GalleryGrid";

import "../style/Page.module.css";

const Home = () => {
  return (
    <main>
      <div>
        <h1>Un espacio para el arte moderno y contemporáneo</h1>
        <p>Conectando artistas con coleccionistas globalmente</p>
      </div>
      <FilterDropdown />
      <GalleryGrid />
    </main>
  );
};

export default Home;
