import { useTranslation } from "react-i18next";

// components
import HeroComponent from "../../../components/PageComponents/HeroComponent";
import PresentationCard from "../../../components/Card/PresentationCard";
import PresentationCardBack from "../../../components/Card/PresentationCardBack";

function Applications() {
  const { t } = useTranslation();

  return (
    <section>
      <HeroComponent
        noAnimations
        title={t("_pages:brandIdentity.applications.title")}
      />
      <div className="applications content viewport grid gap-10">
        <div className="basic-column">
          <h2 className="text-2xl">
            {t("_pages:brandIdentity.applications.title")}
          </h2>
          <h3 className="text-xl poppins-600">
            {t("_pages:brandIdentity.applications.subtitle")}
          </h3>
          <p className="body">{t("_pages:brandIdentity.applications.body")}</p>
          <div className="flex flex-col gap-3">
            <h4 className="body roboto-700">
              {t("_pages:brandIdentity.applications.format.title")}
            </h4>
            <p className="body">
              {t("_pages:brandIdentity.applications.format.number")}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="body roboto-700">
              {t("_pages:brandIdentity.applications.material.title")}
            </h4>
            <div>
              <p className="body">
                {t("_pages:brandIdentity.applications.material.one")}
              </p>
              <p className="body">
                {t("_pages:brandIdentity.applications.material.two")}
              </p>
            </div>
          </div>
          <div>
            <h4 className="body roboto-700">
              {t("_pages:brandIdentity.applications.typography.title")}
            </h4>
            <p className="body">
              {t("_pages:brandIdentity.applications.typography.name")}
            </p>
            <p className="body">
              {t("_pages:brandIdentity.applications.typography.profession")}
            </p>
            <p className="body">
              {t("_pages:brandIdentity.applications.typography.contactInfo")}
            </p>
          </div>
        </div>
        <div>
          <div className="md:hidden h-[56px]" />
          <div className="grid grid-cols-2 md:grid-cols-1 gap-5 xs:pt-[160px] xs:gap-[170px] xs:mb-40">
            <div className="flex flex-col gap-5 xs:items-center xs:justify-center xs:gap-[160px]">
              <PresentationCard color="#D7942E" className="xs:rotate-90" />
              <PresentationCardBack color="#D7942E" className="xs:rotate-90" />
            </div>
            <div className="flex flex-col gap-5 xs:items-center xs:justify-center xs:gap-[160px]">
              <PresentationCard color="#00997B" className="xs:rotate-90" />
              <PresentationCardBack color="#00997B" className="xs:rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Applications;
