import { useTranslation } from "react-i18next";

// components
import HeroComponent from "../../../components/PageComponents/HeroComponent";

function Resources() {
  const { t } = useTranslation();

  return (
    <section>
      <HeroComponent title={t("_pages:home.resources.title")} />
    </section>
  );
}

export default Resources;
