import { useTranslation } from "react-i18next";

function Default() {
  const { t } = useTranslation();

  return (
    <section id="home">
      <h2>{t("_pages:home.hero.titles.default")}</h2>
    </section>
  );
}

export default Default;
