import { useTranslation } from "react-i18next";

// @sito/ui
import { PrintAfter } from "@sito/ui";

// sections
import BlackAndWhite from "./sections/BlackAndWhite";
import Chromatic from "./sections/Chromatic";
import Primary from "./sections/Primary";
import Secondary from "./sections/Secondary";

function Colors() {
  const { t } = useTranslation();

  return (
    <section id="colors">
      <div className="responsive-container flex flex-col gap-10">
        <PrintAfter onVisible animation="appear" delay={200}>
          <h2>{t("_pages:home.colors.title")}</h2>
        </PrintAfter>
        <BlackAndWhite />
        <Chromatic />
        <Primary />
        <Secondary />
      </div>
    </section>
  );
}

export default Colors;
