import PropTypes from "prop-types";
import { css } from "@emotion/css";

// logos
import MiniLogo from "./MiniLogo";
import SitoLogo from "./SitoLogo";

function FullVerticalLogo(props) {
  const { color, logoColor, fontColor, sitoColor, className } = props;

  return (
    <div
      className={`flex flex-col gap-1 items-center justify-center ${className}`}
    >
      <MiniLogo color={color ?? logoColor} className="w-[70px] h-[70px]" />
      <SitoLogo color={color ?? sitoColor} className="w-[95px] h-[45px]" />
      <p
        className={`uppercase text-center poppins-600 text-xs delay-100 transitional ${css(
          {
            color: color ?? fontColor,
            lineHeight: 1,
          }
        )}`}
      >
        Códigos que <br /> conectan y crean
      </p>
    </div>
  );
}

FullVerticalLogo.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  logoColor: PropTypes.string,
  fontColor: PropTypes.string,
  sitoColor: PropTypes.string,
};

export default FullVerticalLogo;
