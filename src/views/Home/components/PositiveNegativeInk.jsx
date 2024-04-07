import { useTranslation } from "react-i18next";
import { useStyle } from "@sito/ui";

// components
import FullHorizontalLogo from "../../../components/Logos/FullHorizontalLogo";
import FullVerticalLogo from "../../../components/Logos/FullVerticalLogo";

function PositiveNegativeInk() {
  const { t } = useTranslation();

  const { colors } = useStyle();

  return (
    <div className="content viewport w-full h-full flex flex-col items-start justify-center">
      <div className="grid grid-cols-6 md:grid-cols-2 xs:grid-cols-1 gap-5 w-full items-center justify-items-center">
        <div className="md:hidden"></div>
        <div className="md:hidden"></div>
        <FullVerticalLogo
          fontColor="#1b1b1b"
          logoColor={colors.primary.default}
          sitoColor={colors.secondary.default}
          className="w-[125px] h-[150px] md:justify-self-start xs:justify-self-center"
        />
        <div className="md:hidden"></div>
        <FullHorizontalLogo
          fontColor="#1b1b1b"
          logoColor={colors.primary.default}
          sitoColor={colors.secondary.default}
          className="md:justify-self-end xs:justify-self-center w-[215px] h-[90px]"
        />
        <div className="md:hidden"></div>
      </div>
      <div className="w-full h-[0px] border-[1px] border-bg mt-10 mb-5"></div>
      <h4 className="poppins-600 text-base justify-self-start text-left mb-10">
        {t("_pages:home.resources.primarySecondaryInk.positive")}
      </h4>
      <div className="grid grid-cols-6 md:grid-cols-2 xs:grid-cols-1 gap-5 w-full items-center justify-items-center">
        <div className="md:hidden"></div>
        <div className="md:hidden"></div>
        <FullVerticalLogo
          className="w-[125px] h-[150px] md:justify-self-start xs:justify-self-center"
          color="#1b1b1b"
        />
        <div className="md:hidden"></div>
        <FullHorizontalLogo
          color="#1b1b1b"
          className="md:justify-self-end xs:justify-self-center w-[215px] h-[90px]"
        />
        <div className="md:hidden"></div>
      </div>
      <div className="w-full h-[0px] border-[1px] border-bg mt-10 mb-5"></div>
      <h4 className="poppins-600 text-base justify-self-start text-left mb-10">
        {t("_pages:home.resources.primarySecondaryInk.chromaticPositive")}
      </h4>
      <div className="grid grid-cols-6 md:grid-cols-2 xs:grid-cols-1 gap-5 w-full items-center justify-items-center">
        <div className="md:hidden"></div>
        <div className="md:hidden"></div>
        <FullVerticalLogo
          color={colors.primary.text}
          className="w-[160px] h-[180px] md:justify-self-start xs:justify-self-center bg-bg"
        />
        <div className="md:hidden"></div>
        <FullHorizontalLogo
          color={colors.primary.text}
          className="md:justify-self-end xs:justify-self-center w-[255px] h-[160px] bg-bg"
        />
        <div className="md:hidden"></div>
      </div>
      <div className="w-full h-[0px] border-[1px] border-bg mt-10 mb-5"></div>
      <h4 className="poppins-600 text-base justify-self-start text-left mb-10">
        {t("_pages:home.resources.primarySecondaryInk.negative")}
      </h4>
    </div>
  );
}

export default PositiveNegativeInk;
