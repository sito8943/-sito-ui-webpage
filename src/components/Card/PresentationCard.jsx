import PropTypes from "prop-types";
import { css } from "@emotion/css";

// logos
import SitoLogo from "../Logos/SitoLogo";
import LogoHalf from "../Logos/LogoHalf";

function PresentationCard(props) {
  const { color } = props;

  return (
    <div className="bg-bg w-[423px] h-[274px] flex items-center justify-between pointer-events-none">
      <div className="pl-[85px]">
        <SitoLogo color={color} className="w-[134.67px] h-[60.6]" />
        <p
          className={`uppercase poppins-600 text-base ${css({
            color,
          })}`}
        >
          Códigos que <br /> conectan  y crean
        </p>
      </div>
      <LogoHalf className="h-full w-[112px]" color={color} />
    </div>
  );
}

PresentationCard.propTypes = {
  color: PropTypes.string,
};

export default PresentationCard;
