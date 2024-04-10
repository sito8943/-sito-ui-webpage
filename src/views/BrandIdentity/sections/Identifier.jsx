import { useTranslation } from "react-i18next";

// sito-ui
import { useStyle } from "@sito/ui";

// page components
import HeroComponent from "../../../components/PageComponents/HeroComponent";
import DualColumn from "../../../components/PageComponents/DualColumn";

// components
import Prohibitions from "../components/Prohibitions";
import BigLogo from "../components/BigLogo";
import Versions from "../components/Versions";

function Identifier() {
  const { t } = useTranslation();

  const { colors } = useStyle();

  const identifierGrids = [
    {
      subtitle: "isotype",
      bodyCount: 2,
      content: (
        <BigLogo
          logoColor={colors.primary.default}
          logoClassName="w-[235px] h-[235px] md:w-[200px] md:h-[200px] sm:w-[180px] sm:h-[180px]"
          fontColor="#d7d7d7"
          fontClassName="!text-4xl md:!text-2xl"
          sitoColor="#d7d7d7"
          sitoClassName="w-[315px] h-[140px] md:w-[265px] md:h-[100px] sm:w-[240px] sm:h-[80px]"
        />
      ),
    },
    {
      subtitle: "logo",
      bodyCount: 1,
      content: (
        <BigLogo
          logoColor="#d7d7d7"
          logoClassName="w-[235px] h-[235px] md:w-[200px] md:h-[200px] sm:w-[180px] sm:h-[180px]"
          fontColor="#d7d7d7"
          fontClassName="!text-4xl md:!text-2xl"
          sitoColor={colors.secondary.default}
          sitoClassName="w-[315px] h-[140px] md:w-[265px] md:h-[100px] sm:w-[240px] sm:h-[80px]"
        />
      ),
    },
    {
      subtitle: "generic",
      bodyCount: 1,
      content: (
        <BigLogo
          logoColor="#d7d7d7"
          logoClassName="w-[235px] h-[235px] md:w-[200px] md:h-[200px] sm:w-[180px] sm:h-[180px]"
          fontColor="#1b1b1b"
          fontClassName="!text-4xl md:!text-2xl"
          sitoColor="#d7d7d7"
          sitoClassName="w-[315px] h-[140px] md:w-[265px] md:h-[100px] sm:w-[240px] sm:h-[80px]"
        />
      ),
    },
    {
      subtitle: "versions",
      bodyCount: 1,
      content: (
        <Versions
          logoColor={colors.primary.default}
          logoClassName="w-[145px] h-[135px]"
          fontColor="#d7d7d7"
          fontClassName="text-xl"
          sitoColor="#d7d7d7"
          sitoClassName="w-[190px] h-[90px]"
        />
      ),
    },
    { subtitle: "constructions", bodyCount: 1 },
    { subtitle: "invasion", bodyCount: 1 },
    { subtitle: "limits", bodyCount: 1 },
  ];

  return (
    <section>
      <HeroComponent
        noAnimations
        title={t("_pages:brandIdentity.identifier.title")}
      />
      {identifierGrids.map((section) => (
        <DualColumn
          key={section.subtitle}
          section="identifier"
          subtitle={section.subtitle}
          bodyCount={section.bodyCount}
          content={section.content}
        />
      ))}
      <Prohibitions />
    </section>
  );
}

export default Identifier;
