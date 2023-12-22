import { useMemo } from "react";
import { useTranslation } from "react-i18next";

// @emotion/css
import { css } from "@emotion/css";

// hooks
import useDelayByBreakpoint from "../../../../hooks/useDelayByBreakpoint";

import { PrintAfter, useStyle } from "@sito/ui";

function Typography() {
  const { colors } = useStyle();

  const { t } = useTranslation();

  const background = useMemo(
    () => css({ background: colors.basics.default }),
    [colors]
  );

  const { delayByBreakpoint } = useDelayByBreakpoint();

  return (
    <section id="typography" className={`${background}`}>
      <div className="responsive-container flex flex-col gap-20">
        <PrintAfter onVisible animation="appear" delay={200}>
          <h2>{t("_pages:home.typography.title")}</h2>
        </PrintAfter>
        <div className="w-full grid grid-cols-2 sm:grid-cols-1 gap-20">
          <div className="flex flex-col gap-10">
            <PrintAfter animation="appear" onVisible delay={400}>
              <h3>Poppins Bold</h3>
            </PrintAfter>
            <PrintAfter animation="appear" onVisible delay={600}>
              <p className="poppins">
                AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
              </p>
            </PrintAfter>
            <PrintAfter animation="appear" onVisible delay={800}>
              <p className="poppins">123456890</p>
            </PrintAfter>
            <PrintAfter animation="appear" onVisible delay={1000}>
              <p className="poppins">([.:,;-!?&%])</p>
            </PrintAfter>
            <PrintAfter animation="appear" onVisible delay={1200}>
              <p>{t("_pages:home.typography.poppins")}</p>
            </PrintAfter>
          </div>
          <div className="flex flex-col gap-10">
            <PrintAfter animation="appear" onVisible delay={400}>
              <h3 className="roboto font">Roboto Regular</h3>
            </PrintAfter>
            <PrintAfter animation="appear" onVisible delay={600}>
              <p>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p>
            </PrintAfter>
            <PrintAfter animation="appear" onVisible delay={800}>
              <p>123456890</p>
            </PrintAfter>
            <PrintAfter animation="appear" onVisible delay={1000}>
              <p>([.:,;-!?&%])</p>
            </PrintAfter>
            <PrintAfter animation="appear" onVisible delay={1200}>
              <p>{t("_pages:home.typography.roboto")}</p>
            </PrintAfter>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Typography;
