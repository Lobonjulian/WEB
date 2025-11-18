import GalleryGrid from "../components/GalleryGrid";

import "../style/Page.module.css";

const Home = () => {
  return (
    <main>
      <div>
        <h1>Un espacio para el arte moderno y contemporáneo</h1>
        <p>Conectando artistas con coleccionistas globalmente</p>
      </div>
      <GalleryGrid />
    </main>
  );
};

export default Home;
