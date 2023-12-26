import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @sito/ui
import { PrintAfter, useStyle } from "@sito/ui";

function Default() {
  const { t } = useTranslation();
  const { colors } = useStyle();

  const location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <section
      id="productivity"
      className="secondary w-viewport filled !p-0 relative flex items-center justify-center"
    >
      <PrintAfter animation="scale-up" onVisible>
        <h2>{t("_pages:home.hero.titles.productivity")}</h2>
      </PrintAfter>

      <div className="absolute bottom-10 px-10 sm:px-5 left-0 w-full flex justify-between items-center">
        <PrintAfter animation="appear" delay={300}>
          <Link
            className={`text-xl transition ${css({
              "&:hover": {
                color: colors.primary.dark,
              },
            })}`}
            to="/#speed"
          >
            {t("_pages:home.hero.titles.speed")}
          </Link>
        </PrintAfter>
        <PrintAfter animation="appear" delay={500}>
          <Link
            disabled
            className={`text-xl transition ${css({
              color: "#b9b9b9 !important",
            })}`}
            to="/#productivity"
          >
            {t("_pages:home.hero.titles.productivity")}
          </Link>
        </PrintAfter>
      </div>
    </section>
  );
}

export default Default;
