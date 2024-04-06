import PropTypes from "prop-types";
import { css } from "@emotion/css";

// logos
import MiniLogo from "./MiniLogo";
import SitoLogo from "./SitoLogo";

function FullHorizontalLogo(props) {
  const { color } = props;

  return (
    <div className="flex gap-1 items-center justify-center">
      <MiniLogo color={color} className="w-[110px] h-[110px]" />
      <div>
        <SitoLogo color={color} className="w-[140px] h-[70px]" />
        <p
          className={`uppercase poppins-600 text-lg delay-100 transitional ${css(
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
};

export default FullHorizontalLogo;
