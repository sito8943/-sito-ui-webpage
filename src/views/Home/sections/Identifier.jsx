import { useTranslation } from "react-i18next";

// page components
import HeroComponent from "../../../components/PageComponents/HeroComponent";
import DualColumn from "../../../components/PageComponents/DualColumn";

// components
import Prohibitions from "../components/Prohibitions";

const identifierGrids = [
  { subtitle: "isotype", bodyCount: 2 },
  { subtitle: "logo", bodyCount: 1 },
  { subtitle: "generic", bodyCount: 1 },
  { subtitle: "versions", bodyCount: 1 },
  { subtitle: "constructions", bodyCount: 1 },
  { subtitle: "invasion", bodyCount: 1 },
  { subtitle: "limits", bodyCount: 1 },
  { subtitle: "prohibitions", bodyCount: 1, content: <Prohibitions /> },
];

function Identifier() {
  const { t } = useTranslation();

  return (
    <section>
      <HeroComponent title={t("_pages:home.identifier.title")} />
      {identifierGrids.map((section) => (
        <DualColumn
          key={section.subtitle}
          section="identifier"
          subtitle={section.subtitle}
          bodyCount={section.bodyCount}
          content={section.content}
        />
      ))}
    </section>
  );
}

export default Identifier;
