import { useTranslation } from "react-i18next";

function Speed() {
  const { t } = useTranslation();

  return (
    <section id="speed">
      <h2>{t("_pages:home.hero.titles.Speed")}</h2>
    </section>
  );
}

export default Speed;
