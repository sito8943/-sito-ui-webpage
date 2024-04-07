import { useTranslation } from "react-i18next";

import { useStyle } from "@sito/ui";

// components
import FullHorizontalLogo from "../../../components/Logos/FullHorizontalLogo";
import FullVerticalLogo from "../../../components/Logos/FullVerticalLogo";

function InkVersions() {
  const { colors } = useStyle();

  const { t } = useTranslation();

  return (
    <div className="content viewport w-full h-full flex flex-col items-start justify-center">
      <div className="grid grid-cols-2 md:grid-cols-1 gap-10 w-full">
        <div className="grid grid-cols-2 gap-5 items-center">
          <FullVerticalLogo
            className="w-[125px] h-[150px] md:justify-self-center"
            color={colors.secondary.default}
          />
          <FullVerticalLogo
            className="w-[125px] h-[150px] md:justify-self-center"
            color={colors.primary.default}
          />
          <FullVerticalLogo
            className="w-[125px] h-[150px] md:justify-self-center"
            color="#D7942E"
          />
          <FullVerticalLogo
            className="w-[125px] h-[150px] md:justify-self-center"
            color="#00997B"
          />
        </div>
        <div className="grid grid-cols-2 gap-5 items-center">
          <FullHorizontalLogo
            color={colors.secondary.default}
            className="justify-self-end md:justify-self-center w-[215px] h-[90px]"
          />
          <FullHorizontalLogo
            color={colors.primary.default}
            className="justify-self-end md:justify-self-center w-[215px] h-[90px]"
          />
          <FullHorizontalLogo
            color="#D7942E"
            className="justify-self-end md:justify-self-center w-[215px] h-[90px]"
          />
          <FullHorizontalLogo
            color="#00997B"
            className="justify-self-end md:justify-self-center w-[215px] h-[90px]"
          />
        </div>
      </div>

      <div className="w-full h-[0px] border-[1px] border-bg mt-10 mb-5"></div>
      <h4 className="poppins-600 text-base justify-self-start text-left">
        {t("_pages:brandIdentity.resources.inkVersions.oneInk")}
      </h4>
    </div>
  );
}

export default InkVersions;
