import PropTypes from "prop-types";
import { css } from "@emotion/css";

// logos
import MiniLogo from "./MiniLogo";
import SitoLogo from "./SitoLogo";

function FullVerticalLogo(props) {
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
    <div
      className={`flex flex-col gap-1 items-center justify-center ${className}`}
    >
      <MiniLogo color={color ?? logoColor} className={`${logoClassName}`} />
      <SitoLogo color={color ?? sitoColor} className={`${sitoClassName}`} />
      <p
        className={`pointer-events-none uppercase text-center poppins-600 delay-100 transitional ${css(
          {
            color: color ?? fontColor,
            lineHeight: 1,
          }
        )} ${fontClassName}`}
      >
        Códigos que <br /> conectan y crean
      </p>
    </div>
  );
}

FullVerticalLogo.defaultProps = {
  logoClassName: "w-[70px] h-[70px]",
  sitoClassName: "w-[95px] h-[45px]",
  fontClassName: "text-xs",
};

FullVerticalLogo.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  logoColor: PropTypes.string,
  fontColor: PropTypes.string,
  sitoColor: PropTypes.string,
  logoClassName: PropTypes.string,
  sitoClassName: PropTypes.string,
  fontClassName: PropTypes.string,
};

export default FullVerticalLogo;
