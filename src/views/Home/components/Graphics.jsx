import { useTranslation } from "react-i18next";

// components
import Angular from "../../../components/Svg/Angular";
import Fragment from "../../../components/Svg/Fragment";

function Graphics() {
  const { t } = useTranslation();

  return (
    <div className="content viewport grid grid-cols-2 md:grid-cols-1 gap-5">
      <div className="flex flex-col items-start justify-start gap-5">
        <h2 className="text-2xl">{t(`_pages:home.resources.title`)}</h2>
        <h4 className="text-xl poppins-600">
          {t(`_pages:home.resources.graphics.title`)}
        </h4>
        <p className="body">
          {t("_pages:home.resources.graphics.body.paragraph1")}
        </p>
        <p className="body">
          {t("_pages:home.resources.graphics.body.paragraph2")}
        </p>
      </div>
      <div className="flex flex-col items-start justify-start gap-5">
        <div className="md:hidden h-[70px]"></div>
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: 96 }, () => 0).map((_, i) => (
            <Angular key={i} />
          ))}
        </div>
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: 60 }, () => 0).map((_, i) => (
            <Fragment key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Graphics;
