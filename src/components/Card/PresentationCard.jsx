import PropTypes from "prop-types";
import { css } from "@emotion/css";

// logos
import SitoLogo from "../Logos/SitoLogo";
import LogoHalfAlt from "../Logos/LogoHalfAlt";

function PresentationCard(props) {
  const { color, className } = props;

  return (
    <div
      className={`bg-bg w-[423px] h-[274px] flex items-center justify-between pointer-events-none ${className}`}
    >
      <div className="pl-[85px]">
        <SitoLogo color={color} className="w-[134.67px] h-[60.6]" />
        <p
          className={`uppercase poppins-600 text-base ${css({
            color,
          })}`}
        >
          Códigos que <br /> conectan y crean
        </p>
      </div>
      <LogoHalfAlt className="h-full w-[112px]" color={color} />
    </div>
  );
}

PresentationCard.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default PresentationCard;
