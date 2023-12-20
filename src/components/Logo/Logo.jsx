import { useMemo } from "react";
import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// logo
import logo from "../../assets/images/logo.svg";

function Logo({ color, className }) {
  const styles = useMemo(
    () =>
      css({
        backgroundColor: color,
        WebkitMask: `url('${logo}') no-repeat center / contain`,
        mask: `url('${logo}') no-repeat center / contain`,
      }),
    [color]
  );

  return <img className={`${styles} ${className}`} alt="logo" />;
}

Logo.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Logo;
