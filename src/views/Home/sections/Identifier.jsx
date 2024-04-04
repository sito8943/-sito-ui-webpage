import { useTranslation } from "react-i18next";

// components
import HeroComponent from "../../../components/PageComponents/HeroComponent";
import DualColumn from "../../../components/PageComponents/DualColumn";

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

function Identifier() {
  const { t } = useTranslation();

  return (
    <section>
      <HeroComponent title={t("_pages:home.identifier.title")} />
      {identifierGrids.map((section) => (
        <DualColumn
          key={section.section}
          section={section.section}
          bodyCount={section.bodyCount}
        />
      ))}
    </section>
  );
}

export default Identifier;
