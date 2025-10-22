import { useTranslation } from "react-i18next";

// images
import verticalPX from "../../../assets/images/verticalPX.svg";
import horizontalPX from "../../../assets/images/horizontalPX.svg";
import verticalMM from "../../../assets/images/verticalMM.svg";
import horizontalMM from "../../../assets/images/horizontalMM.svg";

function Reductions() {
  const { t } = useTranslation();

  return (
    <div className="border-column-container">
      <div className="border-column">
        <div className="logo-row">
          <img src={verticalPX} alt="vertical logo in PX" />
          <img src={horizontalPX} alt="horizontal logo in PX" />
        </div>
        <div className="border-row">
          <h4 className="border-header poppins-700">
            {t("_pages:brandIdentity.identifier.limits.versions.digital")}
          </h4>
          <div className="border" />
        </div>
      </div>
      <div className="border-column">
        <div className="logo-row">
          <img src={verticalMM} alt="vertical logo in MM" />
          <img src={horizontalMM} alt="horizontal logo in MM" />
        </div>
        <div className="border-row">
          <h4 className="border-header poppins-700">
            {t("_pages:brandIdentity.identifier.limits.versions.printed")}
          </h4>
          <div className="border" />
        </div>
      </div>
    </div>
  );
}

export default Reductions;
