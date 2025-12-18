import SectionContainer from "@common/SectionContainer/SectionContainer";
import styles from "./Reward.module.css";

const rewards = [
  {
    id: 1,
    stars: "25★",
    title: "Bebida personalizada",
    description: "Cualquier tamaño",
  },
  {
    id: 2,
    stars: "50★",
    title: "Café + Pastry",
    description: "Combo clásico",
  },
  {
    id: 3,
    stars: "150★",
    title: "Combo desayuno",
    description: "Sandwich + café",
  },
  {
    id: 4,
    stars: "200★",
    title: "Merchandising",
    description: "Taza oficial",
  },
  {
    id: 5,
    stars: "400★",
    title: "Cena para dos",
    description: "Experiencia completa",
  },
];

const Reward = () => {
  return (
    <SectionContainer title="Obtén tus favoritos gratis" variant="reward">
      <div className={styles.reward__grid}>
        {rewards.map((reward) => (
          <div key={reward.id} className={styles.reward__items}>
            <div>
              <span className={styles.reward__star}>{reward.stars}</span>
            </div>
            <div className={styles.reward__content}>
              <h3 className={styles.reward__cardTitle}>{reward.title}</h3>
              <p className={styles.reward__cardDescription}>
                {reward.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Reward;
