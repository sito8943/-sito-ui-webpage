import PropTypes from "prop-types";
import { css } from "@emotion/css";

// logos
import MiniLogo from "./MiniLogo";
import SitoLogo from "./SitoLogo";

function FullVerticalLogo(props) {
  const { color } = props;

  return (
    <div className="flex flex-col gap-1 items-center justify-center">
      <MiniLogo color={color} className="w-[110px] h-[110px]" />
      <SitoLogo color={color} className="w-[140px] h-[70px]" />
      <p
        className={`uppercase text-center poppins-600 text-lg delay-100 transitional ${css({
          color: color,
          lineHeight: 1,
        })}`}
      >
        Códigos que <br /> conectan y crean
      </p>
    </div>
  );
}

FullVerticalLogo.propTypes = {
  color: PropTypes.string,
};

export default FullVerticalLogo;
