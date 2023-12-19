import { PrintAfter } from "@sito/ui";
import { useTranslation } from "react-i18next";

function Colors() {
  const { t } = useTranslation();

  return (
    <section id="colors">
      <div className="responsive-container">
        <PrintAfter onVisible animation="appear" delay={200}>
          <h2>{t("_pages:home.colors.title")}</h2>
        </PrintAfter>
      </div>
    </section>
  );
}

export default Colors;
