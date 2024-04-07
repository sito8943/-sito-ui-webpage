import { useTranslation } from "react-i18next";

import { useStyle } from "@sito/ui";

// components
import FullHorizontalLogo from "../../../components/Logos/FullHorizontalLogo";
import FullVerticalLogo from "../../../components/Logos/FullVerticalLogo";

function InkVersions() {
  const { colors } = useStyle();

  const { t } = useTranslation();

  return (
    <div className="content viewport w-full h-full">
      <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
        <div className="grid grid-cols-2 gap-5 items-center">
          <FullVerticalLogo color={colors.secondary.default} />
          <FullVerticalLogo color={colors.primary.default} />
          <FullVerticalLogo color="#D7942E" />
          <FullVerticalLogo color="#00997B" />
        </div>
        <div className="grid grid-cols-2 gap-5 items-center">
          <FullHorizontalLogo
            color={colors.secondary.default}
            className="justify-self-end"
          />
          <FullHorizontalLogo
            color={colors.primary.default}
            className="justify-self-end"
          />
          <FullHorizontalLogo color="#D7942E" className="justify-self-end" />
          <FullHorizontalLogo color="#00997B" className="justify-self-end" />
        </div>
      </div>

      <div className="w-full h-[0px] border-[1px] border-bg mt-10 mb-5"></div>
      <h4 className="poppins-600 text-base">
        {t("_pages:home.resources.inkVersions.oneInk")}
      </h4>
    </div>
  );
}

export default InkVersions;
