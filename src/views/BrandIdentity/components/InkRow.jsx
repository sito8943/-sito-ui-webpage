import PropTypes from "prop-types";

// components
import FullHorizontalLogo from "../../../components/Logos/FullHorizontalLogo";
import FullVerticalLogo from "../../../components/Logos/FullVerticalLogo";

function InkRow(props) {
  const { fontColor, logoColor, sitoColor, color, bg } = props;

  return (
    <div className="grid grid-cols-6 md:grid-cols-2 sm:grid-cols-1 gap-5 w-full items-center justify-items-center">
      <div className="hidden-on-md"></div>
      <div className="hidden-on-md"></div>
      <FullVerticalLogo
        fontColor={fontColor ?? color}
        logoColor={logoColor ?? color}
        sitoColor={sitoColor ?? color}
        className={`w-[160px] h-[180px] md:justify-self-start sm:justify-self-center ${bg}`}
      />
      <div className="hidden-on-md"></div>
      <FullHorizontalLogo
        fontColor={fontColor ?? color}
        logoColor={logoColor ?? color}
        sitoColor={sitoColor ?? color}
        className={`md:justify-self-end sm:justify-self-center w-[255px] h-[160px] ${bg}`}
      />
      <div className="hidden-on-md"></div>
    </div>
  );
}

InkRow.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
  className: PropTypes.string,
  logoColor: PropTypes.string,
  fontColor: PropTypes.string,
  sitoColor: PropTypes.string,
};

export default InkRow;
