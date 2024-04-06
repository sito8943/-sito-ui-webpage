import { useTranslation } from "react-i18next";

// components
import HeroComponent from "../../../components/PageComponents/HeroComponent";
import DualColumn from "../../../components/PageComponents/DualColumn";
import ChromaticCards from "../components/ChromaticCards";

function Resources() {
  const { t } = useTranslation();

  const resourcesGrids = [
    {
      subtitle: "primary",
      bodyCount: 1,
      content: <div className="flex flex-col"></div>,
    },
    {
      subtitle: "complementary",
      bodyCount: 1,
      content: <div className="flex flex-col"></div>,
    },
    {
      subtitle: "versions",
      bodyCount: 1,
      content: <ChromaticCards />,
    },
  ];

  return (
    <section>
      <HeroComponent title={t("_pages:home.resources.title")} />
      {resourcesGrids.map((section) => (
        <DualColumn
          key={section.subtitle}
          section="resources"
          subtitle={section.subtitle}
          bodyCount={section.bodyCount}
          content={section.content}
        />
      ))}
    </section>
  );
}

export default Resources;
