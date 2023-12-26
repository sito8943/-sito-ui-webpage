import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @sito/ui
import { PrintAfter, useStyle } from "@sito/ui";

// components
import Logo from "../../../../components/Logo/Logo";

function Default() {
  const { t } = useTranslation();
  const { colors } = useStyle();

  const location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <section
      id="home"
      className={`!p-0 w-viewport relative flex items-center justify-center`}
    >
      <PrintAfter animation="scale-up" onVisible>
        <Logo
          color={colors.primary.text}
          className="w-[350px] sm:w-[200px] h-[190px]"
        />
      </PrintAfter>

      <div className="absolute bottom-10 px-10 sm:px-5 left-0 w-full flex justify-between items-center">
        <PrintAfter onVisible animation="appear" delay={300}>
          <Link
            className={`text-xl transition ${css({
              "&:hover": {
                color: colors.primary.default,
              },
            })}`}
            to="/#speed"
          >
            {t("_pages:home.hero.titles.speed")}
          </Link>
        </PrintAfter>
        <PrintAfter onVisible animation="appear" delay={500}>
          <Link
            className={`text-xl transition ${css({
              "&:hover": {
                color: colors.secondary.default,
              },
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
