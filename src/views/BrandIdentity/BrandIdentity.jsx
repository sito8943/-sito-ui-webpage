import { useTranslation } from "react-i18next";
import loadable from "@loadable/component";

// styles
import "./sections/styles.css";

// components
import HeroComponent from "../../components/PageComponents/HeroComponent";

// sections
const Introduction = loadable(() => import("./sections/Introduction"));
const Identifier = loadable(() => import("./sections/Identifier"));
const Resources = loadable(() => import("./sections/Resources"));
const Applications = loadable(() => import("./sections/Applications"));

function BrandIdentity() {
  const { t } = useTranslation();

  return (
    <>
      <section>
        <HeroComponent
          title={t("_pages:home.hero.subtitle")}
          subtitle={t("_pages:home.hero.subtitleBig")}
        />
      </section>
      <Introduction />
      <Identifier />
      <Resources />
      <Applications />
      <section>
        <HeroComponent
          title={t("_pages:home.hero.subtitle")}
          subtitle={t("_pages:home.hero.subtitleBig")}
        />
      </section>
    </>
  );
}

export default BrandIdentity;
