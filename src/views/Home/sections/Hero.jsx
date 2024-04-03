import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

// images
import logoHalf from "../../../assets/images/logo-half.svg";

// logo
import SitoLogo from "../../../components/Logos/SitoLogo";

function Hero() {
  const { t } = useTranslation();

  const [appear, setAppear] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setAppear(true);
      document.body.style.overflow = "auto";
    }, 700);
  }, []);

  return (
    <section className="filled secondary viewport w-full relative expand">
      <div className="absolute top-20 left-10 gap-4 flex flex-col">
        <SitoLogo
          className={`w-[130px] h-[58px] transitional ${
            appear ? "appearable" : "dissapearable"
          }`}
        />
        <h1
          className={`uppercase poppins-600 w-[175px] text-[16px] delay-100 transitional ${
            appear ? "appearable" : "dissapearable"
          }`}
        >
          {t("_pages:home.hero.title")}
        </h1>
      </div>
      <div className="absolute bottom-10 left-10">
        <div>
          <h2
            className={`poppins-600 text-[38px] delay-200 transitional ${
              appear ? "appearable" : "dissapearable"
            }`}
          >
            {t("_pages:home.hero.subtitle")}
          </h2>
          <h3
            className={`poppins-900 text-[52px] delay-300 transitional ${
              appear ? "appearable" : "dissapearable"
            }`}
          >
            {t("_pages:home.hero.subtitleBig")}
          </h3>
        </div>
      </div>
      <div>
        <img
          src={logoHalf}
          alt="half of the logo"
          className="h-screen absolute top-0 right-0"
        />
      </div>
    </section>
  );
}

export default Hero;
