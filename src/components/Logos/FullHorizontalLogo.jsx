import PropTypes from "prop-types";
import { css } from "@emotion/css";

// logos
import MiniLogo from "./MiniLogo";
import SitoLogo from "./SitoLogo";

function FullHorizontalLogo(props) {
  const { color, logoColor, fontColor, sitoColor, className } = props;

  return (
    <div className={`flex gap-1 items-center justify-center ${className}`}>
      <MiniLogo color={color ?? logoColor} className="w-[80px] h-[80px]" />
      <div className="flex flex-col gap-2">
        <SitoLogo color={color ?? sitoColor} className="w-[110px] h-[50px]" />
        <p
          className={`pointer-events-none uppercase poppins-600 text-xs delay-100 transitional ${css(
            { color: color ?? fontColor, lineHeight: 1 }
          )}`}
        >
          Códigos que <br /> conectan y crean
        </p>
      </div>
    </div>
  );
}

FullHorizontalLogo.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  logoColor: PropTypes.string,
  fontColor: PropTypes.string,
  sitoColor: PropTypes.string,
};

export default FullHorizontalLogo;
