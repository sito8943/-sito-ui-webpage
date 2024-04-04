import { useTranslation } from "react-i18next";

// components
import HeroComponent from "../../../components/PageComponents/HeroComponent";
import DualColumn from "../../../components/PageComponents/DualColumn";

const resourcesGrids = [
  {
    subtitle: "complementary",
    bodyCount: 1,
  },
  {
    subtitle: "versions",
    bodyCount: 1,
  },
];

function Resources() {
  const { t } = useTranslation();

  return (
    <section>
      <HeroComponent title={t("_pages:home.resources.title")} />
      {resourcesGrids.map((section) => (
        <DualColumn
          key={section.subtitle}
          section="resources"
          subtitle={section.subtitle}
          bodyCount={section.bodyCount}
        />
      ))}
    </section>
  );
}

export default Resources;
