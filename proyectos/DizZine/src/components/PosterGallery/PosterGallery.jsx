import { citiesData } from "../../constants/citiesData";
import CityPoster from "../CityPoster/CityPoster";
import styles from "./PosterGallery.module.css";

const PosterGallery = () => {
  return (
    <div className={styles.gallery}>
      {citiesData.map((city) => (
        <CityPoster key={city.cityName} city={city} />
      ))}
    </div>
  );
};

export default PosterGallery;
