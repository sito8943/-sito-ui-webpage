import { useTranslation } from "react-i18next";
import { useStyle } from "@sito/ui";

// components
import InkRow from "./InkRow";

function PositiveNegativeInk() {
  const { t } = useTranslation();

  const { colors } = useStyle();

  return (
    <div className="content viewport w-full h-full flex flex-col items-start justify-center">
      <InkRow
        fontColor="#1b1b1b"
        logoColor={colors.primary.default}
        sitoColor={colors.secondary.default}
      />
      <div className="w-full h-[0px] border-[1px] border-bg mt-10 mb-5"></div>
      <h4 className="poppins-700 text-base justify-self-start text-left mb-10">
        {t("_pages:brandIdentity.resources.primarySecondaryInk.positive")}
      </h4>
      <InkRow color="#1b1b1b" />
      <div className="w-full h-[0px] border-[1px] border-bg mt-10 mb-5"></div>
      <h4 className="poppins-700 text-base justify-self-start text-left mb-10">
        {t("_pages:brandIdentity.resources.primarySecondaryInk.chromaticPositive")}
      </h4>
      <InkRow color={colors.primary.text} bg="bg-bg" />
      <div className="w-full h-[0px] border-[1px] border-bg mt-10 mb-5"></div>
      <h4 className="poppins-700 text-base justify-self-start text-left mb-10">
        {t("_pages:brandIdentity.resources.primarySecondaryInk.negative")}
      </h4>
    </div>
  );
}

export default PositiveNegativeInk;
