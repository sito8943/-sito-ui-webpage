import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @sito/ui
import { useStyle } from "@sito/ui";

function Default() {
  const { t } = useTranslation();
  const { colors } = useStyle();

  const location = useLocation();

  const [appear, setAppear] = useState(false);

  useEffect(() => {
    const { hash } = location;
    setAppear(hash.indexOf("#productivity") >= 0);
  }, [location]);

  return (
    <section
      id="productivity"
      className={`!p-0 w-viewport flex items-center justify-center filled secondary flex-col gap-10 fixed top-0 left-0 w-full transition duration-500 ease-in-out ${
        appear
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <h2
        className={`delay-100 transitional ${
          appear ? "appearable" : "dissapearable"
        }`}
      >
        {t("_pages:home.hero.titles.productivity")}
      </h2>

      <div className="absolute bottom-10 px-10 sm:px-5 left-0 w-full flex justify-between items-center">
        <Link
          className={`text-xl sm:text-lg transition ${css({
            "&:hover": {
              color: colors.primary.light,
            },
          })}`}
          to="/#speed"
        >
          {t("_pages:home.hero.titles.speed")}
        </Link>
        <Link
          disabled
          className={`text-xl sm:text-lg transition ${css({
            color: "#b9b9b9 !important",
          })}`}
          to="/#productivity"
        >
          {t("_pages:home.hero.titles.productivity")}
        </Link>
      </div>
    </section>
  );
}

export default Default;
