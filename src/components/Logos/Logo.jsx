import PropTypes from "prop-types";

function Logo(props) {
  const { color, className } = props;

  return (
    <svg
      width="336"
      height="338"
      viewBox="0 0 336 338"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M206.455 130.177L245.325 91.8275L167.835 14.2975L90.3447 91.8275L244.535 246.527L168.025 323.887L90.4447 246.527L128.555 208.697"
        stroke={color}
        strokeWidth="19.35"
        strokeMiterlimit="10"
      />
      <path
        d="M264.435 110.658L321.935 169.028L264.435 227.368"
        stroke={color}
        strokeWidth="19.35"
        strokeMiterlimit="10"
      />
      <path
        d="M71.5644 226.777L14.0645 168.407L71.5644 110.067"
        stroke={color}
        strokeWidth="19.35"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

Logo.defaultProps = {
  color: "#FBFBFB",
  className: "",
};

Logo.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Logo;
