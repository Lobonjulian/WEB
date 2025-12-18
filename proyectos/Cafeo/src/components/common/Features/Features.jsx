import Card from "@common/Card/Card";
import SectionContainer from "@common/SectionContainer/SectionContainer";
import { adapterFeatureCard } from "./FeatureCardAdapter";

import styles from "./Features.module.css";

const Features = ({ section }) => {
  const { meta, items } = section;
  const { title, description, cardVariant, layout } = meta;

  return (
    <SectionContainer title={title} subtitle={description}>
      <div className={`${styles.feature} ${styles[`feature--${layout}`]}`}>
        {items.map((item, index) => (
          <Card
            key={index}
            variant={cardVariant}
            {...adapterFeatureCard(item)}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Features;
