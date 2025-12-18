import Button from "@common/Button/Button";

export const adapterFeatureCard = (item) => {
  return {
    media: item.imagen ? (
      <img src={item.imagen} alt={item.title} loading="lazy" />
    ) : item.number ? (
      <span>{item.number}</span>
    ) : null,
    title: item.title,
    description: item.description,

    actions: item.cta ? <Button variant="ghost">{item.cta}</Button> : null,
  };
};


