import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

// logos
import FullVerticalLogo from "../../../components/Logos/FullVerticalLogo";
import FullHorizontalLogo from "../../../components/Logos/FullHorizontalLogo";

export default function Versions(props) {
  const {
    logoColor,
    fontColor,
    sitoColor,
    logoClassName,
    sitoClassName,
    fontClassName,
  } = props;

  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full md:gap-10 items-center">
      <div className="w-full flex flex-col items-end md:items-center justify-start">
        <FullVerticalLogo
          logoColor={logoColor}
          logoClassName={logoClassName}
          fontColor={fontColor}
          fontClassName={fontClassName}
          sitoColor={sitoColor}
          sitoClassName={sitoClassName}
        />
        <div className="flex md:flex-col-reverse items-center md:items-start gap-10 md:gap-2 w-full">
          <h4 className="poppins-700 text-xl whitespace-nowrap text-center md:text-left min-w-[188px]">
            {t("_pages:brandIdentity.identifier.versions.list.vertical")}
          </h4>
          <div className="w-full h-[0px] border-[1px] border-bg my-10 md:my-0 md:mt-5"></div>
        </div>
      </div>
      <div className="w-full flex flex-col items-end md:items-center justify-start">
        <FullHorizontalLogo
          logoColor={logoColor}
          logoClassName={logoClassName}
          fontColor={fontColor}
          fontClassName={fontClassName}
          sitoColor={sitoColor}
          sitoClassName={sitoClassName}
        />
        <div className="flex md:flex-col-reverse items-center md:items-start gap-10 md:gap-2 w-full">
          <h4 className="poppins-700 text-xl whitespace-nowrap text-center md:text-left min-w-[188px]">
            {t("_pages:brandIdentity.identifier.versions.list.horizontal")}
          </h4>
          <div className="w-full h-[0px] border-[1px] border-bg my-10 md:my-0 md:mt-5"></div>
        </div>
      </div>
    </div>
  );
}

Versions.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  logoColor: PropTypes.string,
  fontColor: PropTypes.string,
  sitoColor: PropTypes.string,
  logoClassName: PropTypes.string,
  sitoClassName: PropTypes.string,
  fontClassName: PropTypes.string,
};