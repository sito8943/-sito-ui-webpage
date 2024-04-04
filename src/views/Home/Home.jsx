import { useTranslation } from "react-i18next";

// components
import HeroComponent from "../../components/PageComponents/HeroComponent";

// sections
import Introduction from "./sections/Introduction";
import Identifier from "./sections/Identifier";
import Resources from "./sections/Resources";
import Applications from "./sections/Applications";

function Home() {
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

export default Home;
