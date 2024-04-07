import { css } from "@emotion/css";
import PropTypes from "prop-types";

function ColorOpacity(props) {
  const { color, colorHex, description } = props;

  return (
    <div className="flex h-full md:flex-col-reverse">
      <div
        className={`h-full md:h-auto flex items-end justify-start p-3 pr-10 ${css({
          background: `${color ?? colorHex}1E`,
        })}`}
      >
        <p className={`${css({ color: color ?? colorHex })} roboto-400`}>30%</p>
      </div>
      <div
        className={`h-full md:h-auto flex items-end justify-start p-3 pr-10 ${css({
          background: `${color ?? colorHex}32`,
        })}`}
      >
        <p className="text-white roboto-400">50%</p>
      </div>
      <div
        className={`h-full md:h-auto flex items-end justify-start p-3 pr-10 ${css({
          background: `${color ?? colorHex}50`,
        })}`}
      >
        <p className="text-white roboto-400">80%</p>
      </div>
      <div
        className={`h-full md:h-[200px] flex items-end md:items-start justify-start w-full p-3 ${css({
          background: `${color ?? colorHex}`,
        })}`}
      >
        <p className="text-white roboto-400">{description}</p>
      </div>
    </div>
  );
}

ColorOpacity.propTypes = {
  color: PropTypes.string,
  description: PropTypes.string,
  colorHex: PropTypes.any,
};

export default ColorOpacity;
