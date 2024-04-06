import PropTypes from "prop-types";

function LogoHalf(props) {
  const { color, className } = props;

  return (
    <svg
      width="112"
      height="226"
      viewBox="0 0 112 226"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_273_250)">
        <path
          d="M111.776 105.425C97.3458 90.995 82.9158 76.575 68.4858 62.145C82.9158 47.485 97.3458 32.835 111.776 18.175C111.776 12.175 111.776 6.18501 111.776 0.195007C91.5858 20.885 71.4058 41.565 51.2158 62.255C71.4058 82.425 91.5958 102.605 111.786 122.775C111.786 116.995 111.786 111.205 111.786 105.425H111.776Z"
          fill={color}
        />
        <path
          d="M111.796 208.025C97.4055 193.755 83.0255 179.485 68.6355 165.225L89.7155 144.385L81.0756 135.645L51.1855 165.185C71.3855 185.255 91.5755 205.325 111.776 225.395C111.776 219.605 111.786 213.815 111.796 208.025Z"
          fill={color}
        />
        <path
          d="M42.9451 156.395L0.205078 113.695L42.8951 70.045L51.6751 78.635L17.4851 113.595L51.6251 147.705L42.9451 156.395Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_273_250">
          <rect
            width="111.59"
            height="225.2"
            fill="white"
            transform="translate(0.205078 0.195007)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

LogoHalf.defaultProps = {
  color: "#FBFBFB",
  className: "",
};

LogoHalf.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default LogoHalf;