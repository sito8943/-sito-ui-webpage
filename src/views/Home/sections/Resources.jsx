import { useTranslation } from "react-i18next";

// page components
import HeroComponent from "../../../components/PageComponents/HeroComponent";
import DualColumn from "../../../components/PageComponents/DualColumn";

// components
import ChromaticCards from "../components/ChromaticCards";
import PrimaryPalette from "../components/PrimaryPalette";
import SecondaryPalette from "../components/SecondaryPalette";
import Typography from "../components/Typography";

const resourcesGrids1 = [
  {
    subtitle: "primary",
    bodyCount: 1,
    content: <PrimaryPalette />,
  },
  {
    subtitle: "complementary",
    bodyCount: 1,
    content: <SecondaryPalette />,
  },
  {
    subtitle: "versions",
    bodyCount: 1,
    content: <ChromaticCards />,
  },
];

const resourcesGrids2 = [
  {
    subtitle: "complementary",
    bodyCount: 1,
    content: <SecondaryPalette />,
  },
  {
    subtitle: "versions",
    bodyCount: 1,
    content: <ChromaticCards />,
  },
];

function Resources() {
  const { t } = useTranslation();

  return (
    <section>
      <HeroComponent title={t("_pages:home.resources.title")} />
      {resourcesGrids1.map((section) => (
        <DualColumn
          key={section.subtitle}
          section="resources"
          subtitle={section.subtitle}
          bodyCount={section.bodyCount}
          content={section.content}
        />
      ))}
      <div></div>
      <div></div>
      <Typography />
      {resourcesGrids2.map((section) => (
        <DualColumn
          key={section.subtitle}
          section="resources"
          subtitle={section.subtitle}
          bodyCount={section.bodyCount}
          content={section.content}
          bodyRendererClassName={section.bodyRendererClassName}
        />
      ))}
    </section>
  );
}

export default Resources;
