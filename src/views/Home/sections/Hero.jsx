import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @sito/ui
import { useStyle } from "@sito/ui";

// components
import MiniLogo from "../../../components/Logos/MiniLogo";

// styles
import "./styles.css";

export default function Hero() {
  const { t } = useTranslation();
  const { colors } = useStyle();

  const [appear, setAppear] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppear(true);
    }, 200);
  }, []);

  const location = useLocation();

  const color = useMemo(() => {
    const { hash } = location;
    switch (true) {
      case !hash.length || hash.length === 1:
        return "bg-bg";
      case hash.indexOf("#speed") >= 0:
        return "bg-primary";
      case hash.indexOf("#productivity") >= 0:
        return "bg-secondary";
    }
  }, [location]);

  return (
    <section
      id="home"
      className={`!p-0 w-viewport flex items-center justify-center ${color} flex-col gap-10 w-full transition duration-500 ease-in-out`}
    >
      <div
        className={`w-full flex flex-col items-center justify-center gap-5 relative`}
      >
        <MiniLogo
          className={`-mt-40 w-[250px] h-[250px] sm:w-[150px] md:h-[150px] delay-100 transitional ${
            appear ? "appearable" : "dissapearable"
          }`}
        />

        <h1
          className={`text-3xl roboto-500 text-white text-center delay-200 transitional absolute mt-[250px] md:mt-[150px] ${
            color === "bg-bg" && appear ? "appearable" : "dissapearable"
          }`}
        >
          {t("_pages:home.hero.title")}
          <br />
          {t("_pages:home.hero.subtitle")}
        </h1>

        <h2
          className={`text-white text-4xl delay-200 transitional absolute mt-[250px] md:mt-[150px]  ${
            color === "bg-primary" && appear ? "appearable" : "dissapearable"
          }`}
        >
          {t("_pages:home.hero.titles.speed")}
        </h2>
        <h2
          className={`text-white text-4xl delay-200 transitional absolute mt-[250px] md:mt-[150px]  ${
            color === "bg-secondary" && appear ? "appearable" : "dissapearable"
          }`}
        >
          {t("_pages:home.hero.titles.productivity")}
        </h2>
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
          name="speed"
          aria-label="click to go to speed section"
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
          name="productivity"
          aria-label="click to go to productivity section"
          to="/#productivity"
        >
          {t("_pages:home.hero.titles.productivity")}
        </Link>
      </div>
    </section>
  );
}
