import PropTypes from "prop-types";
import { css } from "@emotion/css";

// logos
import MiniLogo from "./MiniLogo";
import SitoLogo from "./SitoLogo";

function FullHorizontalLogo(props) {
  const { color, className } = props;

  return (
    <div
      className={`flex gap-1 items-center justify-center w-[215px] h-[90px] ${className}`}
    >
      <MiniLogo color={color} className="w-[80px] h-[80px]" />
      <div className="flex flex-col gap-2">
        <SitoLogo color={color} className="w-[110px] h-[50px]" />
        <p
          className={`uppercase poppins-600 text-xs delay-100 transitional ${css(
            { color: color, lineHeight: 1 }
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
};

export default FullHorizontalLogo;
