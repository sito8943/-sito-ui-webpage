import { useTranslation } from "react-i18next";
import { useStyle } from "@sito/ui";

// components
import HeroComponent from "../../../components/PageComponents/HeroComponent";
import DualColumn from "../../../components/PageComponents/DualColumn";
import ChromaticCard from "../../../components/Card/CromaticCard";

function Resources() {
  const { t } = useTranslation();

  const { colors } = useStyle();

  const resourcesGrids = [
    {
      subtitle: "complementary",
      bodyCount: 1,
    },
    {
      subtitle: "versions",
      bodyCount: 1,
      content: (
        <div className="grid grid-cols-2 md:grid-cols-1 h-full w-full gap-4 ">
          <ChromaticCard bgColor={colors.primary.default} />
          <ChromaticCard bgColor={colors.secondary.default} />
          <ChromaticCard bgColor="#D7942E" />
          <ChromaticCard bgColor="#00997B" />
          <ChromaticCard
            bgColor="#00997B"
            logoColor={colors.primary.default}
            fontColor={colors.secondary.default}
          />
          <ChromaticCard
            bgColor="#D7942E"
            logoColor={colors.primary.default}
            fontColor={colors.secondary.default}
          />
        </div>
      ),
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
