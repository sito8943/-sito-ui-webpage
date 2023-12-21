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

export default function Secondary() {
  const { t } = useTranslation();

  const { colors } = useStyle();

  const { delayByBreakpoint } = useDelayByBreakpoint();

  return (
    <div className="w-full flex flex-col justify-start items-start gap-4">
      <PrintAfter animation="appear" onVisible delay={200}>
        <h3>{t("_pages:home.colors.secondary")}</h3>
      </PrintAfter>
      <PrintAfter animation="appear" onVisible delay={200}>
        <h4>{t("_pages:home.colors.lightMode")}</h4>
      </PrintAfter>
      <div
        className={`w-full grid grid-cols-3 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 gap-x-2 gap-y-4`}
      >
        <PrintAfter
          animation="appear"
          onVisible
          delay={delayByBreakpoint(["md", "sm"], [400, 200])}
        >
          <Card
            inverted
            className={`relative flex items-center justify-center ${css({
              color: `${colors.secondary.default} !important`,
            })}`}
          >
            <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
              <p className="uppercase">{colors.basics.text}</p>
              <RGBColor color={colors.basics.text} />
            </div>
            <Logo color={colors.secondary.default} className="w-40 h-40" />
          </Card>
        </PrintAfter>
        <PrintAfter
          animation="appear"
          onVisible
          delay={delayByBreakpoint(["lg", "md", "sm"], [600, 600, 200])}
        >
          <Card
            className={`relative flex items-center justify-center ${css({
              background: `#EDEDED !important`,
              color: `${colors.secondary.default} !important`,
            })}`}
          >
            <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
              <p className="uppercase">#EDEDED</p>
              <RGBColor color="#EDEDED" />
            </div>
            <Logo color={colors.secondary.default} className="w-40 h-40" />
          </Card>
        </PrintAfter>
        <div
          className={`${css({
            "@media (max-width:900px) and (min-width: 601px)": {
              gridArea: "2 / 1 / 3 / 3;",
            },
          })}`}
        >
          <PrintAfter
            animation="appear"
            onVisible
            delay={delayByBreakpoint(["lg", "md", "sm"], [800, 600, 200])}
          >
            <Card
              className={`relative flex items-center justify-center ${css({
                background: `#E1E1E1 !important`,
                color: `${colors.secondary.default} !important`,
              })}`}
            >
              <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
                <p className="uppercase">#E1E1E1</p>
                <RGBColor color="#E1E1E1" />
              </div>
              <Logo color={colors.secondary.default} className="w-40 h-40" />
            </Card>
          </PrintAfter>
        </div>
      </div>
      <PrintAfter animation="appear" onVisible delay={200}>
        <h4>{t("_pages:home.colors.darkMode")}</h4>
      </PrintAfter>
      <div className="w-full grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-4">
        <PrintAfter
          animation="appear"
          onVisible
          delay={delayByBreakpoint(["md", "sm"], [400, 200])}
        >
          <Card
            className={`relative flex items-center justify-center ${css({
              background: `${colors.basics.light} !important`,
              color: `${colors.secondary.default} !important`,
            })}`}
          >
            <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
              <p className="uppercase">{colors.basics.light}</p>
              <RGBColor color={colors.basics.light} />
            </div>
            <Logo color={colors.secondary.default} className="w-40 h-40" />
          </Card>
        </PrintAfter>
        <PrintAfter
          animation="appear"
          onVisible
          delay={delayByBreakpoint(["lg", "md", "sm"], [600, 400, 200])}
        >
          <Card
            className={`relative flex items-center justify-center ${css({
              background: colors.basics.default,
              color: `${colors.secondary.default} !important`,
            })}`}
          >
            <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
              <p className="uppercase">{colors.basics.default}</p>
              <RGBColor color={colors.basics.default} />
            </div>
            <Logo color={colors.secondary.default} className="w-40 h-40" />
          </Card>
        </PrintAfter>
        <div
          className={`${css({
            "@media (max-width:900px) and (min-width: 601px)": {
              gridArea: "2 / 1 / 3 / 3;",
            },
          })}`}
        >
          <PrintAfter
            animation="appear"
            onVisible
            delay={delayByBreakpoint(["lg", "md", "sm"], [800, 600, 200])}
          >
            <Card
              bordered
              className={`relative flex items-center justify-center ${css({
                borderColor: colors.secondary.default,
                color: `${colors.secondary.default} !important`,
              })}`}
            >
              <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
                <p className="uppercase">{colors.basics.default}</p>
                <RGBColor color={colors.basics.default} />
              </div>
              <Logo color={colors.secondary.default} className="w-40 h-40" />
            </Card>
          </PrintAfter>
        </div>
      </div>
      <PrintAfter animation="appear" onVisible delay={200}>
        <h4>{t("_pages:home.colors.colorChromatic")}</h4>
      </PrintAfter>
      <div className="w-full grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-4">
        <PrintAfter
          animation="appear"
          onVisible
          delay={delayByBreakpoint(["md", "sm"], [400, 200])}
        >
          <Card
            className={`relative flex items-center justify-center ${css({
              background: `${colors.secondary.light} !important`,
              color: `${colors.secondary.text} !important`,
            })}`}
          >
            <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
              <p className="uppercase">{colors.secondary.light}</p>
              <RGBColor color={colors.secondary.light} />
            </div>
            <Logo color={colors.secondary.text} className="w-40 h-40" />
          </Card>
        </PrintAfter>
        <PrintAfter
          animation="appear"
          onVisible
          delay={delayByBreakpoint(["lg", "md", "sm"], [600, 400, 200])}
        >
          <Card
            className={`relative flex items-center justify-center ${css({
              background: `${colors.secondary.default} !important`,
            })}`}
          >
            <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
              <p className="uppercase secondary filled">
                {colors.secondary.default}
              </p>
              <RGBColor color={colors.secondary.default} />
            </div>
            <Logo color={colors.basics.text} className="w-40 h-40" />
          </Card>
        </PrintAfter>
        <div
          className={`${css({
            "@media (max-width:900px) and (min-width: 601px)": {
              gridArea: "2 / 1 / 3 / 3;",
            },
          })}`}
        >
          <PrintAfter
            animation="appear"
            onVisible
            delay={delayByBreakpoint(["lg", "md", "sm"], [800, 600, 200])}
          >
            <Card
              className={`relative flex items-center justify-center ${css({
                background: `${colors.secondary.dark} !important`,
                color: `${colors.secondary.text} !important`,
              })}`}
            >
              <div className="p-3 flex absolute w-full h-full flex-col justify-between items-start">
                <p className="uppercase">{colors.secondary.dark}</p>
                <RGBColor color={colors.secondary.dark} />
              </div>
              <Logo color={colors.secondary.text} className="w-40 h-40" />
            </Card>
          </PrintAfter>
        </div>
      </div>
    </div>
  );
}
