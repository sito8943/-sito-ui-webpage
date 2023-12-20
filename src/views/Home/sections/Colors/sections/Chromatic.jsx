import { useTranslation } from "react-i18next";

// @sito/ui
import { PrintAfter, useScreenHandler, useStyle } from "@sito/ui";

// components
import Card from "../../../../../components/Card/Card";
import RGBColor from "../components/RGBColor";

// images
import logo from "../../../../../assets/images/logo.svg";

export default function Chromatic() {
  const { t } = useTranslation();

  const { colors } = useStyle();

  const { breakpoint } = useScreenHandler();

  return (
    <div className="w-full flex flex-col justify-start items-start gap-4">
      <PrintAfter animation="appear" onVisible delay={200}>
        <h3>{t("_pages:home.colors.chromatic")}</h3>
      </PrintAfter>
      <div className="w-full grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-4">
        <PrintAfter animation="appear" onVisible delay={400}>
          <Card inverted className="relative flex items-center justify-center">
            <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
              <p className="uppercase">{colors.basics.text}</p>
              <RGBColor color={colors.basics.text} />
            </div>
            <img src={logo} alt="logo" className="w-40 h-40" />
          </Card>
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
        <PrintAfter animation="appear" onVisible delay={400}>
          <Card inverted className="relative flex items-center justify-center">
            <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
              <p className="uppercase">{colors.basics.text}</p>
              <RGBColor color={colors.basics.text} />
            </div>
            <img src={logo} alt="logo" className="w-40 h-40" />
          </Card>
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
        <PrintAfter animation="appear" onVisible delay={400}>
          <Card inverted className="relative flex items-center justify-center">
            <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
              <p className="uppercase">{colors.basics.text}</p>
              <RGBColor color={colors.basics.text} />
            </div>
            <img src={logo} alt="logo" className="w-40 h-40" />
          </Card>
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
    </div>
  );
}
