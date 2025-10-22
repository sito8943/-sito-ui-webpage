import PropTypes from "prop-types";
import { css } from "@emotion/css";

// logos
import MiniLogo from "./MiniLogo";
import SitoLogo from "./SitoLogo";

function FullHorizontalLogo(props) {
  const {
    color,
    logoColor,
    fontColor,
    sitoColor,
    className,
    logoClassName,
    sitoClassName,
    fontClassName,
  } = props;

  return (
    <div className={`flex gap-1 items-center justify-center ${className}`}>
      <MiniLogo color={color ?? logoColor} className={logoClassName} />
      <div className="flex flex-col gap-2">
        <SitoLogo color={color ?? sitoColor} className={sitoClassName} />
        <p
          className={`pointer-events-none uppercase poppins-600 ${fontClassName} delay-100 transitional ${css(
            { color: color ?? fontColor, lineHeight: 1 }
          )}`}
        >
          Códigos que <br /> conectan y crean
        </p>
      </div>
    </div>
  );
}

FullHorizontalLogo.defaultProps = {
  logoClassName: "w-[80px] h-[80px]",
  sitoClassName: "w-[110px] h-[50px]",
  fontClassName: "text-xs",
};

FullHorizontalLogo.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  logoColor: PropTypes.string,
  fontColor: PropTypes.string,
  sitoColor: PropTypes.string,
  logoClassName: PropTypes.string,
  sitoClassName: PropTypes.string,
  fontClassName: PropTypes.string,
};

export default FullHorizontalLogo;
