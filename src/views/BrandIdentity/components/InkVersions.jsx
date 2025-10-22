import { useTranslation } from "react-i18next";

import { useStyle } from "@sito/ui";

// components
import FullHorizontalLogo from "../../../components/Logos/FullHorizontalLogo";
import FullVerticalLogo from "../../../components/Logos/FullVerticalLogo";

// sty;es
import "./styles.css";

function InkVersions() {
  const { colors } = useStyle();

  const { t } = useTranslation();

  return (
    <div className="ink-container content viewport">
      <div className="grid grid-cols-2 md:grid-cols-1 gap-10 w-full">
        <div className="ink-column">
          <FullVerticalLogo
            className="ink-logo"
            color={colors.secondary.default}
          />
          <FullVerticalLogo
            className="ink-logo"
            color={colors.primary.default}
          />
          <FullVerticalLogo className="ink-logo" color="#D7942E" />
          <FullVerticalLogo className="ink-logo" color="#00997B" />
        </div>
        <div className="ink-column">
          <FullHorizontalLogo
            color={colors.secondary.default}
            className="ink-logo2"
          />
          <FullHorizontalLogo
            color={colors.primary.default}
            className="ink-logo2"
          />
          <FullHorizontalLogo color="#D7942E" className="ink-logo2" />
          <FullHorizontalLogo color="#00997B" className="ink-logo2" />
        </div>
      </div>

      <div className="ink-border"></div>
      <h4 className="poppins-700 text-base justify-self-start text-left">
        {t("_pages:brandIdentity.resources.inkVersions.oneInk")}
      </h4>
    </div>
  );
}

export default InkVersions;
