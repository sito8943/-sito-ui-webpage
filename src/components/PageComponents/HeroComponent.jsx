import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// images
import logoHalf from "../../assets/images/logo-half.svg";

// logo
import SitoLogo from "../Logos/SitoLogo";

function HeroComponent(props) {
  const { title, subtitle } = props;

  const [appear, setAppear] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setAppear(true);
      document.body.style.overflow = "auto";
    }, 700);
  }, []);

  return (
    <div className="filled secondary viewport w-full relative expand">
      <div className="absolute top-20 left-20 sm:left-10 gap-4 flex flex-col">
        <SitoLogo
          className={`w-[130px] h-[58px] transitional ${
            appear ? "appearable" : "dissapearable"
          }`}
        />
        <h1
          className={`uppercase poppins-600 text-base delay-100 transitional ${
            appear ? "appearable" : "dissapearable"
          }`}
        >
          Códigos que <br /> conectan  y crean
        </h1>
      </div>
      <div className="absolute bottom-20 left-20 sm:left-10 flex flex-col gap-3">
        {title && (
          <h2
            className={`${
              !subtitle
                ? "poppins-900 text-6xl md:text-5xl sm:text-4xl sm:w-2/4 "
                : "poppins-600 text-4xl md:text-3xl sm:text-2xl"
            } uppercase delay-200 transitional ${
              appear ? "appearable" : "dissapearable"
            }`}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <h3
            className={`poppins-900 text-6xl md:text-5xl sm:text-4xl sm:w-2/4 uppercase delay-300 transitional ${
              appear ? "appearable" : "dissapearable"
            }`}
          >
            {subtitle}
          </h3>
        )}
      </div>
      <div>
        <img
          src={logoHalf}
          alt="half of the logo"
          className="transition-opacity duration-500 ease-in-out fit-viewport absolute top-0 right-0 sm:opacity-40"
        />
      </div>
    </div>
  );
}

HeroComponent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default HeroComponent;
