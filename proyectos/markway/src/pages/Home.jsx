import { resources, collections } from "@data/resources";
import { sidebarItems } from "@data/sidebarData";
import { useState } from "react";
import Header from "@components/Header/Header";
import ResourceCard from "@components/ResourceCard/ResourceCard";
import ResourceGrid from "@components/ResourceGrid/ResourceGrid";
import Sidebar from "@components/Sidebar/Sidebar";
import Footer from "@components/Footer/Footer"

import styles from "./Home.module.css";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [busqueda, setBusqueda] = useState("");

  const recursosFiltrados = resources.filter((resources) => {
    const categoryMatch =
      activeCategory === "all" ||
      resources.tag?.toLowerCase().includes(activeCategory) ||
      resources.title.toLowerCase().includes(activeCategory);

    const coincideBusqueda =
      !busqueda ||
      resources.title.toLowerCase().includes(busqueda.toLowerCase()) ||
      resources.tag?.toLowerCase().includes(busqueda.toLowerCase());

    return coincideBusqueda && categoryMatch;
  });

  return (
    <div className={styles.home}>
      <Header />
      <main className={styles.homeMain}>
        <div className={styles.mainContainer}>
          <Sidebar
            categories={sidebarItems}
            activeCategory={activeCategory}
            onCategoryClick={setActiveCategory}
            searchQuery={busqueda}
            onSearchChange={setBusqueda}
          />
          <div className={styles.mainAside}>
            <ResourceGrid
              items={recursosFiltrados}
              title={"Novedades en la Biblioteca"}
              subtitle={
                recursosFiltrados.lenght === resources.lenght
                  ? "Herramientas y guías para potenciar tu marketing digital"
                  : `Mostrando ${recursosFiltrados.lenght} de ${resources.lenght} recursoss`
              }
              renderItem={(item) => (
                <ResourceCard item={item} type="resource" />
              )}
            />
            <ResourceGrid
              items={collections}
              title={"Colecciones destacadas"}
              subtitle={
                "Colecciones seleccionadas para potenciar el marketing digital"
              }
              renderItem={(item) => (
                <ResourceCard item={item} type="collection" />
              )}
            />
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
