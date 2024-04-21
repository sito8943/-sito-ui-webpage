import { useTranslation } from "react-i18next";

// images
import verticalPX from "../../../assets/images/verticalPX.svg";
import horizontalPX from "../../../assets/images/horizontalPX.svg";
import verticalMM from "../../../assets/images/verticalMM.svg";
import horizontalMM from "../../../assets/images/horizontalMM.svg";

function Reductions() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full md:gap-10 items-center">
      <div className="w-full flex flex-col items-end md:items-center justify-start">
        <div className="flex sm:flex-col gap-40 sm:gap-10 items-end sm:items-center justify-end sm:justify-center">
          <img src={verticalPX} alt="vertical logo in PX" />
          <img src={horizontalPX} alt="horizontal logo in PX" />
        </div>
        <div className="flex md:flex-col-reverse items-center md:items-start gap-10 md:gap-2 w-full">
          <h4 className="poppins-700 text-xl whitespace-nowrap text-center md:text-left min-w-[188px]">
            {t("_pages:brandIdentity.identifier.limits.versions.digital")}
          </h4>
          <div className="w-full h-[0px] border-[1px] border-bg my-10 md:my-0 md:mt-5"></div>
        </div>
      </div>
      <div className="w-full flex flex-col items-end md:items-center justify-start">
        <div className="flex sm:flex-col gap-40 sm:gap-10 items-end sm:items-center justify-end sm:justify-center">
          <img src={verticalMM} alt="vertical logo in MM" />
          <img src={horizontalMM} alt="horizontal logo in MM" />
        </div>
        <div className="flex md:flex-col-reverse items-center md:items-start gap-10 md:gap-2 w-full">
          <h4 className="poppins-700 text-xl whitespace-nowrap text-center md:text-left min-w-[188px]">
            {t("_pages:brandIdentity.identifier.limits.versions.printed")}
          </h4>
          <div className="w-full h-[0px] border-[1px] border-bg my-10 md:my-0 md:mt-5"></div>
        </div>
      </div>
    </div>
  );
}

export default Reductions;
