import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @sito/ui
import { useStyle } from "@sito/ui";

// components
import MiniLogo from "../../../components/Logos/MiniLogo";

function Default() {
  const { t } = useTranslation();
  const { colors } = useStyle();

  const location = useLocation();

  const [appear, setAppear] = useState(false);
  const [oneTime, setOneTime] = useState(false);

  useEffect(() => {
    const { hash } = location;
    setAppear(!hash.length || hash.length === 1);
  }, [location]);

  useEffect(() => {
    if (appear) setOneTime(true);
  }, [appear]);

  return (
    <section
      id="home"
      className={`!p-0 w-viewport flex items-center justify-center bg-bg flex-col gap-10 fixed top-0 left-0 w-full transition duration-500 ease-in-out ${
        appear
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className={`flex flex-col items-center justify-center gap-5`}>
        <MiniLogo
          className={`w-[250px] h-[250px] sm:w-[150px] md:h-[150px] delay-100 transitional ${
            appear ? "appearable" : "dissapearable"
          }`}
        />
        <h1 className="text-3xl roboto-500 text-white text-center">
          {t("_pages:home.hero.title")}
          <br />
          {t("_pages:home.hero.subtitle")}
        </h1>
      </div>

      <div className="absolute bottom-10 px-10 sm:px-5 left-0 w-full flex justify-between items-center">
        <Link
          className={`text-xl sm:text-lg transition text-white ${css({
            "&:hover": {
              color: colors.primary.light,
            },
          })} delay-300 transitional ${
            oneTime ? "appearable" : "dissapearable"
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
            oneTime ? "appearable" : "dissapearable"
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
