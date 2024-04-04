import { useTranslation } from "react-i18next";

// sections
import HeroSection from "./sections/HeroSection";
import Introduction from "./sections/Introduction";
import IdentifierGrid from "./sections/IdentifierGrid";

function Home() {
  const { t } = useTranslation();

  const identifierGrids = [
    { section: "isotype", bodyCount: 2 },
    { section: "logo", bodyCount: 1 },
    { section: "generic", bodyCount: 1 },
    { section: "versions", bodyCount: 1 },
    { section: "constructions", bodyCount: 1 },
    { section: "invasion", bodyCount: 1 },
    { section: "limits", bodyCount: 1 },
    { section: "prohibitions", bodyCount: 1 },
  ];

  return (
    <>
      <HeroSection
        title={t("_pages:home.hero.subtitle")}
        subtitle={t("_pages:home.hero.subtitleBig")}
      />
      <Introduction />
      <HeroSection title={t("_pages:home.identifier.title")} />
      {identifierGrids.map((section) => (
        <IdentifierGrid
          key={section.section}
          section={section.section}
          bodyCount={section.bodyCount}
        />
      ))}
      <HeroSection title={t("_pages:home.resources.title")} />
      <HeroSection title={t("_pages:home.applications.title")} />
      <HeroSection
        title={t("_pages:home.hero.subtitle")}
        subtitle={t("_pages:home.hero.subtitleBig")}
      />
    </>
  );
}

export default Home;
