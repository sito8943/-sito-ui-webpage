import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";

// images
import logoHalf from "../../assets/images/logo-half.svg";

// logo
import SitoLogo from "../Logos/SitoLogo";

function HeroComponent(props) {
  const { title, subtitle, noAnimations } = props;

  const [appear, setAppear] = useState(noAnimations);

  useEffect(() => {
    if (!noAnimations) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setAppear(true);
        document.body.style.overflow = "auto";
      }, 700);
    }
  }, [noAnimations]);

  const renderAnimation = useMemo(() => {
    if (noAnimations) return "";
    if (appear) return "appearable";
    return "dissapearable";
  }, [appear, noAnimations]);

  return (
    <div className="filled secondary viewport w-full relative expand">
      <div className="absolute top-20 left-20 sm:left-10 gap-4 flex flex-col">
        <SitoLogo
          className={`w-[130px] h-[58px] transitional ${renderAnimation}`}
        />
        <h1
          className={`uppercase poppins-600 text-base delay-100 transitional ${renderAnimation}`}
        >
          Códigos que <br /> conectan y crean
        </h1>
      </div>
      <div className="absolute bottom-20 left-20 sm:left-10 flex flex-col gap-3">
        {title && (
          <h2
            className={`${
              !subtitle
                ? "poppins-900 text-6xl md:text-5xl sm:text-4xl sm:w-2/4 "
                : "poppins-600 text-4xl md:text-3xl sm:text-2xl"
            } uppercase delay-200 transitional ${renderAnimation}`}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <h3
            className={`poppins-900 text-6xl md:text-5xl sm:text-4xl sm:w-2/4 uppercase delay-300 transitional ${renderAnimation}`}
          >
            {subtitle}
          </h3>
        )}
      </div>
      <div>
        <img
          src={logoHalf}
          alt="half of the logo"
          className="transition-opacity duration-500 ease-in-out fit-viewport absolute top-0 right-0 md:opacity-40"
        />
      </div>
    </div>
  );
}

HeroComponent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  noAnimations: PropTypes.bool,
};

export default HeroComponent;
