import { useTranslation } from "react-i18next";

// page components
import HeroComponent from "../../../components/PageComponents/HeroComponent";
import DualColumn from "../../../components/PageComponents/DualColumn";

// components
import ChromaticCards from "../components/ChromaticCards";
import PrimaryPalette from "../components/PrimaryPalette";
import SecondaryPalette from "../components/SecondaryPalette";
import Typography from "../components/Typography";
import Graphics from "../components/Graphics";
import InkVersions from "../components/InkVersions";
import PositiveNegativeInk from "../components/PositiveNegativeInk";

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

function Resources() {
  const { t } = useTranslation();

  return (
    <section>
      <HeroComponent title={t("_pages:brandIdentity.resources.title")} />
      {resourcesGrids1.map((section) => (
        <DualColumn
          key={section.subtitle}
          section="resources"
          subtitle={section.subtitle}
          bodyCount={section.bodyCount}
          content={section.content}
        />
      ))}
      <PositiveNegativeInk />
      <InkVersions />
      <Typography />
      <Graphics />
    </section>
  );
}

export default Resources;
