import { useMemo } from "react";
import { useTranslation } from "react-i18next";

// @emotion/css
import { css } from "@emotion/css";

// @sito/ui
import { useStyle } from "@sito/ui";

function Logo() {
  const { colors } = useStyle();

  const { t } = useTranslation();

  const background = useMemo(
    () => css({ background: colors.basics.default }),
    [colors]
  );

  return (
    <section id="logo" className={background}>
      <div className="responsive-container">
        <h2>{t("_pages:home.logo.title")}</h2>
      </div>
    </section>
  );
}

export default Logo;
