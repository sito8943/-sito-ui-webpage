import PropTypes from "prop-types";

function Fragment(props) {
  const { color } = props;

  return (
    <svg
      width="68"
      height="40"
      viewBox="0 0 68 40"
      fill="none"
      className="w-[58px] h-[32px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_280_11)">
        <path
          d="M47.6396 5.77002L65.8396 19.67L47.6396 33.57"
          stroke={color}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M19.8504 33.57L1.65039 19.66L19.8504 5.77002"
          stroke={color}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M42.7801 0.459961L22.8301 38.63"
          stroke={color}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0_280_11">
          <rect width="67.49" height="39.09" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

Fragment.defaultProps = {
  color: "#1B1B1B",
};

Fragment.propTypes = {
  color: PropTypes.string,
};

export default Fragment;
