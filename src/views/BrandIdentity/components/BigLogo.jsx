import PropTypes from "prop-types";

// logos
import FullVerticalLogo from "../../../components/Logos/FullVerticalLogo";

export default function BigLogo(props) {
  const {
    logoColor,
    fontColor,
    sitoColor,
    logoClassName,
    sitoClassName,
    fontClassName,
  } = props;

  return (
    <div className="flex w-full items-start justify-end lg:mt-20 md:mt-5 md:justify-center">
      <FullVerticalLogo
        logoColor={logoColor}
        logoClassName={logoClassName}
        fontColor={fontColor}
        fontClassName={fontClassName}
        sitoColor={sitoColor}
        sitoClassName={sitoClassName}
      />
    </div>
  );
}

BigLogo.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  logoColor: PropTypes.string,
  fontColor: PropTypes.string,
  sitoColor: PropTypes.string,
  logoClassName: PropTypes.string,
  sitoClassName: PropTypes.string,
  fontClassName: PropTypes.string,
};
