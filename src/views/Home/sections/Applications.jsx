import { useTranslation } from "react-i18next";

// components
import HeroComponent from "../../../components/PageComponents/HeroComponent";

function Applications() {
  const { t } = useTranslation();

  return (
    <section>
      <HeroComponent title={t("_pages:home.applications.title")} />
    </section>
  );
}

export default Applications;
