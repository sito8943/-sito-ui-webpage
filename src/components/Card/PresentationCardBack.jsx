import PropTypes from "prop-types";
import { css } from "@emotion/css";

// logos
import LogoHalfAlt from "../Logos/LogoHalfAlt";

function PresentationCardBack(props) {
  const { color, className } = props;

  return (
    <div
      className={`bg-bg w-[423px] h-[274px] flex items-center justify-between pointer-events-none ${className}`}
    >
      <LogoHalfAlt alt className={`h-full w-[112px]`} color={color} />
      <div
        className={`p-6 flex flex-col items-end h-full justify-between ${css({
          color,
        })}`}
      >
        <p className="text-right poppins-700 text-lg">
          Carlos Andrés Mora González <br />
          <span className="poppins-700 text-base">Diseñador Web</span>
        </p>
        <p className="text-right roboto-500 text-base">
          +53 56174215 <br></br>
          sito8943@gmail.com <br></br>
          linktr.ee/sito8943 <br></br>
        </p>
      </div>
    </div>
  );
}

PresentationCardBack.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default PresentationCardBack;
