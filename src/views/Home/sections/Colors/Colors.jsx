import { useTranslation } from "react-i18next";

function Colors() {
  const { t } = useTranslation();

  return (
    <section id="colors">
      <div className="responsive-container">
        <h2>{t("_pages:home.colors.title")}</h2>
      </div>
    </section>
  );
}

export default Colors;
