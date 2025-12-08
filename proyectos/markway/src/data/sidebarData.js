export const sidebarItems = [
  {
    id: "all",
    label: "Todos los recursos",
    count: 6,
    icon: "📚",
  },
  {
    id: "recursos",
    label: "Recursos",
    count: 5,
    icon: "📝",
  },
  {
    id: "blog",
    label: "Blog & Artículos",
    count: 1,
    icon: "📄",
  },
  {
    id: "herramientas",
    label: "Herramientas",
    count: 1,
    icon: "🛠️",
  },
  {
    id: "analisis",
    label: "Análisis de datos",
    count: 1,
    icon: "📊",
  },
  {
    id: "seo",
    label: "SEO",
    count: 1,
    icon: "🔍",
  },
];

export const filterResources = (resources, categoryId) => {
  if (categoryId === "all") return resources;

  const categoryMap = {
    recursos: ["Recursos"],
    blog: ["Blog & Artículos"],
    herramientas: ["Recursos"], 
    analisis: ["Recursos"],
    seo: ["Blog & Artículos"], 
  };

  return resources.filter((resource) => {
    const tags = categoryMap[categoryId] || [];
    return tags.some(
      (tag) =>
        resource.tag === tag ||
        resource.title.toLowerCase().includes(categoryId)
    );
  });
};
