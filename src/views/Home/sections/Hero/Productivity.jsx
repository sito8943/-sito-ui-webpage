import { useTranslation } from "react-i18next";

function Productivity() {
  const { t } = useTranslation();

  return (
    <section id="productivity">
      <h2>{t("_pages:home.hero.titles.productivity")}</h2>
    </section>
  );
}

export default Productivity;
