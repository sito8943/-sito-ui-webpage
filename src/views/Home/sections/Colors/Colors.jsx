import { useTranslation } from "react-i18next";

function Colors() {
  const { t } = useTranslation();

  return (
    <section id="colors">
      <h2>{t("_pages:home.colors.title")}</h2>
    </section>
  );
}

export default Colors;
