import PropTypes from "prop-types";

function LogoHalf(props) {
  const { color, className } = props;

  return (
    <svg
      width="427"
      height="900"
      viewBox="0 0 427 900"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_259_133"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="-10"
        width="427"
        height="920"
      >
        <path d="M426.926 -10H0V909.02H426.926V-10Z" fill="white" />
      </mask>
      <g mask="url(#mask0_259_133)">
        <path
          d="M426.91 418.991C371.697 360.071 316.485 301.142 261.281 242.222C316.493 182.358 371.697 122.502 426.902 62.6373V-10C349.667 74.2188 272.432 158.438 195.197 242.656C272.44 325.054 349.683 407.46 426.925 489.867C426.925 466.244 426.926 442.613 426.91 418.991Z"
          fill={color}
        />
        <path
          d="M427.006 838.061C371.961 779.78 316.916 721.508 261.871 663.227L342.525 578.116L309.479 542.427L195.142 663.099C272.408 745.071 349.675 827.042 426.942 909.013C426.966 885.365 426.99 861.709 427.014 838.061H427.006Z"
          fill={color}
        />
        <path
          d="M163.524 627.192L0 452.758L163.333 274.495L196.936 309.579L66.1237 452.35L196.745 591.699L163.524 627.192Z"
          fill={color}
        />
      </g>
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
