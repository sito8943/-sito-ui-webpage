import { useMemo } from "react";
import { useTranslation } from "react-i18next";

// @emotion/css
import { css } from "@emotion/css";

// @sito/ui
import { PrintAfter, useStyle } from "@sito/ui";

function Concepts() {
  const { colors } = useStyle();

  const { t } = useTranslation();

  const background = useMemo(
    () => css({ background: colors.basics.default }),
    [colors]
  );

  return (
    <section id="concepts" className={background}>
      <div className="responsive-container">
        <PrintAfter onVisible animation="appear" delay={200}>
          <h2>{t("_pages:home.concepts.title")}</h2>
        </PrintAfter>
      </div>
    </section>
  );
}

export default Concepts;
