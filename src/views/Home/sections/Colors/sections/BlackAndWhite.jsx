import { useTranslation } from "react-i18next";

// @sito/ui
import { PrintAfter, useScreenHandler, useStyle } from "@sito/ui";

// components
import Card from "../../../../../components/Card/Card";
import RGBColor from "../components/RGBColor";

// images
import logo from "../../../../../assets/images/logo.svg";

export default function BlackAndWhite() {
  const { t } = useTranslation();

  const { colors } = useStyle();

  const { breakpoint } = useScreenHandler();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-4">
      <div className="flex flex-col gap-4">
        <PrintAfter animation="appear" onVisible delay={200}>
          <h3>{t("_pages:home.colors.blackAndWhite.white")}</h3>
        </PrintAfter>
        <PrintAfter animation="appear" onVisible delay={400}>
          <Card inverted className="relative flex items-center justify-center">
            <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
              <p className="uppercase">{colors.basics.text}</p>
              <RGBColor color={colors.basics.text} />
            </div>
            <img src={logo} alt="logo" className="w-40 h-40" />
          </Card>
        </PrintAfter>
      </div>
      <div className="flex flex-col gap-4">
        <PrintAfter
          animation="appear"
          onVisible
          delay={breakpoint === "sm" ? 200 : 600}
        >
          <h3>{t("_pages:home.colors.blackAndWhite.black")}</h3>
        </PrintAfter>
        <PrintAfter
          animation="appear"
          onVisible
          delay={breakpoint === "sm" ? 400 : 800}
        >
          <Card bordered className="relative flex items-center justify-center">
            <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
              <p className="uppercase">{colors.basics.dark}</p>
              <RGBColor color={colors.basics.dark} />
            </div>
            <img src={logo} alt="logo" className="w-40 h-40" />
          </Card>
        </PrintAfter>
      </div>
    </div>
  );
}
