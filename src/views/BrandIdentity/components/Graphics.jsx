import { useTranslation } from "react-i18next";

// components
import Angular from "../../../components/Svg/Angular";
import Fragment from "../../../components/Svg/Fragment";

// styles
import "./styles.css";

function Graphics() {
  const { t } = useTranslation();

  return (
    <div className="content viewport grid grid-cols-2 md:grid-cols-1 gap-5">
      <div className="basic-column">
        <h2 className="text-2xl">
          {t(`_pages:brandIdentity.resources.title`)}
        </h2>
        <h4 className="text-xl poppins-700">
          {t(`_pages:brandIdentity.resources.graphics.title`)}
        </h4>
        <p className="body">
          {t("_pages:brandIdentity.resources.graphics.body.paragraph1")}
        </p>
        <p className="body">
          {t("_pages:brandIdentity.resources.graphics.body.paragraph2")}
        </p>
      </div>
      <div className="basic-column">
        <div className="hidden-on-md h-[70px]"></div>
        <div className="basic-flex-wrap">
          {Array.from({ length: 96 }, () => 0).map((_, i) => (
            <Angular key={i} />
          ))}
        </div>
        <div className="basic-flex-wrap">
          {Array.from({ length: 60 }, () => 0).map((_, i) => (
            <Fragment key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Graphics;
