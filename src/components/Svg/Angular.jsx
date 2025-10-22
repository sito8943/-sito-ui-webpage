import PropTypes from "prop-types";

function Angular(props) {
  const { color } = props;

  return (
    <svg
      width="46"
      height="30"
      viewBox="0 0 46 30"
      fill="none"
      className="w-[34px] h-[24px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_280_8)">
        <path
          d="M25.9502 0.800049L44.1502 14.7L25.9502 28.59"
          stroke={color}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M19.8504 28.59L1.65039 14.69L19.8504 0.790039"
          stroke={color}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0_280_8">
          <rect width="45.8" height="29.39" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

Angular.defaultProps = {
  color: "#1B1B1B",
};

Angular.propTypes = {
  color: PropTypes.string,
};

export default Angular;
