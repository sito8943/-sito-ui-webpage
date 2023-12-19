import { useMemo } from "react";
import PropTypes from "prop-types";

function RGBColor({ color }) {
  const R = useMemo(() => {
    return parseInt(color.substring(1, 3), 16);
  }, [color]);

  const G = useMemo(() => {
    return parseInt(color.substring(3, 5), 16);
  }, [color]);

  const B = useMemo(() => {
    return parseInt(color.substring(5, 7), 16);
  }, [color]);

  return (
    <div>
      <p>R: {R}</p>
      <p>G: {G}</p>
      <p>B: {B}</p>
    </div>
  );
}

RGBColor.propTypes = {
  color: PropTypes.string,
};

export default RGBColor;
