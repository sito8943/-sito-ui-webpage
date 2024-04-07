import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @sito/ui
import { useStyle } from "@sito/ui";

// components
import MiniLogo from "../../../components/Logos/MiniLogo";
import SitoLogo from "../../../components/Logos/SitoLogo";

function Default() {
  const { t } = useTranslation();
  const { colors } = useStyle();

  const location = useLocation();

  const [appear, setAppear] = useState(false);

  useEffect(() => {
    const { hash } = location;
    setAppear(!hash.length || hash.length === 1);
  }, [location]);

  return (
    <section
      id="home"
      className={`!p-0 w-viewport relative flex items-center justify-center bg-bg flex-col gap-10`}
    >
      <div className={`flex flex-col items-center justify-center gap-5`}>
        <MiniLogo
          className={`w-[300px] h-[300px] sm:w-[150px] md:h-[150px] delay-100 transitional ${
            appear ? "appearable" : "dissapearable"
          }`}
        />
        <SitoLogo
          className={`w-[160px] sm:w-[110px] h-[75px] delay-200 transitional ${
            appear ? "appearable" : "dissapearable"
          }`}
        />
      </div>

      <div className="absolute bottom-10 px-10 sm:px-5 left-0 w-full flex justify-between items-center">
        <Link
          className={`text-xl sm:text-lg transition text-white ${css({
            "&:hover": {
              color: colors.primary.light,
            },
          })} delay-300 transitional ${
            appear ? "appearable" : "dissapearable"
          }`}
          to="/#speed"
        >
          {t("_pages:home.hero.titles.speed")}
        </Link>
        <Link
          className={`text-xl sm:text-lg transition text-white ${css({
            "&:hover": {
              color: colors.secondary.light,
            },
          })} delay-[400ms] transitional ${
            appear ? "appearable" : "dissapearable"
          }`}
          to="/#productivity"
        >
          {t("_pages:home.hero.titles.productivity")}
        </Link>
      </div>
    </section>
  );
}

export default Default;