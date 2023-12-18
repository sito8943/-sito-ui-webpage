import { useMemo } from "react";
import { useTranslation } from "react-i18next";

// @emotion/css
import { css } from "@emotion/css";

import { useStyle } from "@sito/ui";

function Typography() {
  const { colors } = useStyle();

  const { t } = useTranslation();

  const background = useMemo(
    () => css({ background: colors.basics.default }),
    [colors]
  );

  return (
    <section id="typography" className={background}>
      <h2>{t("_pages:home.typography.title")}</h2>
    </section>
  );
}

export default Typography;
