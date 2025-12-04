import { resources, collections } from "@data/resources";
import Header from "@components/Header/Header";
import ResourceCard from "@components/ResourceCard/ResourceCard";
import ResourceGrid from "@components/ResourceGrid/ResourceGrid";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <main>
        <ResourceGrid
          items={resources}
          title={"Novedades en la Biblioteca"}
          subtitle={"Herramientas y guías para potenciar tu marketing digital"}
          renderItem={(item) => <ResourceCard item={item} type="resource" />}
        />
        <ResourceGrid
          items={collections}
          title={"Colecciones destacadas"}
          subtitle={
            "Colecciones seleccionadas para potenciar el marketing digita"
          }
          renderItem={(item) => <ResourceCard item={item} type="collection" />}
        />
      </main>
    </div>
  );
};

export default Home;
