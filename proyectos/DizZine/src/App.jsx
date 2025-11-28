import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PosterGallery from "./components/PosterGallery/PosterGallery";


function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <PosterGallery />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
