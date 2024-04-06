import { css } from "@emotion/css";
import PropTypes from "prop-types";

// logos
import MiniLogo from "../Logos/MiniLogo";
import SitoLogo from "../Logos/SitoLogo";

function ChromaticCard(props) {
  const { bgColor, logoColor, fontColor } = props;

  return (
    <div
      className={`flex items-center justify-center gap-2 w-full h-full py-10 ${css({
        backgroundColor: bgColor,
      })}`}
    >
      <MiniLogo color={logoColor} className="w-[110px] h-[110px]" />
      <div>
        <SitoLogo color={fontColor} className="w-[140px] h-[70px]" />
        <p
          className={`uppercase poppins-600 text-lg delay-100 transitional ${css(
            { color: fontColor, lineHeight: 1 }
          )}`}
        >
          Códigos que <br /> conectan y crean
        </p>
      </div>
    </div>
  );
}

ChromaticCard.defaultProps = {
  bgColor: "#FBFBFB",
  logoColor: "#FBFBFB",
  fontColor: "#FBFBFB",
};

ChromaticCard.propTypes = {
  bgColor: PropTypes.string,
  logoColor: PropTypes.string,
  fontColor: PropTypes.string,
};

export default ChromaticCard;
