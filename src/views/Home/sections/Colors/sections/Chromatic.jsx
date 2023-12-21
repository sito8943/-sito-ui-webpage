import { useTranslation } from "react-i18next";

// @emotion/css
import { css } from "@emotion/css";

// @sito/ui
import { PrintAfter, useStyle } from "@sito/ui";

// hooks
import useDelayByBreakpoint from "../../../../../hooks/useDelayByBreakpoint";

// components
import Card from "../../../../../components/Card/Card";
import Logo from "../../../../../components/Logo/Logo";
import RGBColor from "../components/RGBColor";

export default function Chromatic() {
  const { t } = useTranslation();

  const { colors } = useStyle();

  const { delayByBreakpoint } = useDelayByBreakpoint();

  return (
    <div className="w-full flex flex-col justify-start items-start gap-4">
      <PrintAfter animation="appear" onVisible delay={200}>
        <h3>{t("_pages:home.colors.chromatic")}</h3>
      </PrintAfter>
      <div className="w-full grid grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-4">
        <PrintAfter
          animation="appear"
          onVisible
          delay={delayByBreakpoint(["md", "sm"], [400, 200])}
        >
          <Card
            inverted
            className={`relative flex items-center justify-center ${css({
              background: `#EDEDED !important`,
            })}`}
          >
            <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
              <p className="uppercase">#EDEDED</p>
              <RGBColor color="#EDEDED" />
            </div>
            <Logo color={colors.basics.dark} className="w-40 h-40" />
          </Card>
        </PrintAfter>
        <PrintAfter
          animation="appear"
          onVisible
          delay={delayByBreakpoint(["md", "sm"], [600, 200])}
        >
          <Card
            inverted
            className={`relative flex items-center justify-center ${css({
              background: `#E1E1E1 !important`,
            })}`}
          >
            <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
              <p className="uppercase">#E1E1E1</p>
              <RGBColor color="#E1E1E1" />
            </div>
            <Logo color={colors.basics.dark} className="w-40 h-40" />
          </Card>
        </PrintAfter>
        <PrintAfter animation="appear" onVisible delay={200}>
          <Card
            className={`relative flex items-center justify-center ${css({
              background: `${colors.basics.light} !important`,
            })}`}
          >
            <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
              <p className="uppercase">{colors.basics.light}</p>
              <RGBColor color={colors.basics.light} />
            </div>
            <Logo color={colors.basics.text} className="w-40 h-40" />
          </Card>
        </PrintAfter>
        <PrintAfter
          animation="appear"
          onVisible
          delay={delayByBreakpoint(["md", "sm"], [400, 200])}
        >
          <Card
            className={`relative flex items-center justify-center ${css({
              background: colors.basics.default,
            })}`}
          >
            <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
              <p className="uppercase">{colors.basics.default}</p>
              <RGBColor color={colors.basics.default} />
            </div>
            <Logo color={colors.basics.text} className="w-40 h-40" />
          </Card>
        </PrintAfter>
      </div>
    </div>
  );
}
