import { useTranslation } from "react-i18next";
import { useStyle } from "@sito/ui";

// components
import InkRow from "./InkRow";

// styles
import "./styles.css";

function PositiveNegativeInk() {
  const { t } = useTranslation();

  const { colors } = useStyle();

  return (
    <div className="ink-container content viewport ">
      <InkRow
        fontColor="#1b1b1b"
        logoColor={colors.primary.default}
        sitoColor={colors.secondary.default}
      />
      <div className="ink-border"></div>
      <h4 className="poppins-700 ink-border-header">
        {t("_pages:brandIdentity.resources.primarySecondaryInk.positive")}
      </h4>
      <InkRow color="#1b1b1b" />
      <div className="ink-border"></div>
      <h4 className="poppins-700 ink-border-header">
        {t(
          "_pages:brandIdentity.resources.primarySecondaryInk.chromaticPositive"
        )}
      </h4>
      <InkRow color={colors.primary.text} bg="bg-bg" />
      <div className="ink-border"></div>
      <h4 className="poppins-700 ink-border-header">
        {t("_pages:brandIdentity.resources.primarySecondaryInk.negative")}
      </h4>
    </div>
  );
}

export default PositiveNegativeInk;
