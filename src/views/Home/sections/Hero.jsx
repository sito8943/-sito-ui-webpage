import { useTranslation } from "react-i18next";

// logo
import Logo from "../../../components/Logos/Logo";
import SitoLogo from "../../../components/Logos/SitoLogo";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="filled secondary viewport w-full relative">
      <div className="absolute top-20 left-10 gap-4 flex flex-col">
        <SitoLogo className="w-[130px] h-[58px]" />
        <h1 className="uppercase poppins-600 w-[175px] text-[16px]">
          {t("_pages:home.hero.title")}
        </h1>
      </div>
      <div className="absolute bottom-10 left-10">
        <div>
          <h2 className="poppins-600 text-[38px]">
            {t("_pages:home.hero.subtitle")}
          </h2>
          <h3 className="poppins-900 text-[52px]">
            {t("_pages:home.hero.subtitleBig")}
          </h3>
        </div>
      </div>
      <div>
        <Logo />
      </div>
    </section>
  );
}

export default Hero;
