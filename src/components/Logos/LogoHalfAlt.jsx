import PropTypes from "prop-types";

function LogoHalfAlt(props) {
  const { color, className, alt } = props;

  return alt ? (
    <svg
      width="112"
      height="226"
      viewBox="0 0 112 226"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_292_45)">
        <path
          d="M0.01 119.92C14.5 134.34 28.99 148.77 43.49 163.19C29.06 177.85 14.63 192.5 0.2 207.16C0.2 213.16 0.2 219.15 0.2 225.14C20.39 204.45 40.57 183.77 60.76 163.08C40.51 142.91 20.25 122.72 0 102.53C0 108.33 0 114.12 0 119.92H0.01Z"
          fill={color}
        />
        <path
          d="M0 17.34C14.45 31.6 28.89 45.86 43.34 60.13L22.26 80.97L30.9 89.71L60.79 60.17C40.53 40.1 20.28 20.05 0.02 0C0.02 5.78 0 11.56 0 17.34Z"
          fill={color}
        />
        <path
          d="M69.02 68.95L111.77 111.65L69.07 155.3L60.29 146.71L94.48 111.75L60.34 77.64L69.02 68.95Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_292_45">
          <rect width="111.77" height="225.15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      width="112"
      height="226"
      viewBox="0 0 112 226"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M111.67 105.91C97.2404 91.48 82.8104 77.06 68.3804 62.63C82.8104 47.97 97.2404 33.32 111.67 18.66C111.67 12.66 111.67 6.66999 111.67 0.679993C91.4804 21.37 71.3004 42.05 51.1104 62.74C71.3004 82.91 91.4904 103.09 111.68 123.26C111.68 117.48 111.68 111.69 111.68 105.91H111.67Z"
        fill={color}
      />
      <path
        d="M111.69 208.51C97.3001 194.24 82.9201 179.97 68.5301 165.71L89.6101 144.87L80.9701 136.13L51.0801 165.67C71.2801 185.74 91.4701 205.81 111.67 225.88C111.67 220.09 111.68 214.3 111.69 208.51Z"
        fill={color}
      />
      <path
        d="M42.8396 156.89L0.0996094 114.18L42.7896 70.54L51.5696 79.13L17.3796 114.08L51.5196 148.2L42.8396 156.89Z"
        fill={color}
      />
    </svg>
  );
}

LogoHalfAlt.defaultProps = {
  color: "#FBFBFB",
  className: "",
  alt: false,
};

LogoHalfAlt.propTypes = {
  alt: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default LogoHalfAlt;
