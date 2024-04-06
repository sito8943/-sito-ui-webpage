import { useTranslation } from "react-i18next";

// components
import HeroComponent from "../../../components/PageComponents/HeroComponent";
import PresentationCard from "../../../components/Card/PresentationCard";
import PresentationCardBack from "../../../components/Card/PresentationCardBack";

function Applications() {
  const { t } = useTranslation();

  return (
    <section>
      <HeroComponent title={t("_pages:home.applications.title")} />
      <div className="applications content viewport grid gap-10">
        <div className="flex flex-col items-start justify-start gap-5">
          <h2 className="text-2xl">{t("_pages:home.applications.title")}</h2>
          <h3 className="text-xl poppins-600">
            {t("_pages:home.applications.subtitle")}
          </h3>
          <p className="body">{t("_pages:home.applications.body")}</p>
          <div className="flex flex-col gap-3">
            <h4 className="body roboto-500">
              {t("_pages:home.applications.format.title")}
            </h4>
            <p className="body">
              {t("_pages:home.applications.format.number")}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="body roboto-500">
              {t("_pages:home.applications.material.title")}
            </h4>
            <div>
              <p className="body">
                {t("_pages:home.applications.material.one")}
              </p>
              <p className="body">
                {t("_pages:home.applications.material.two")}
              </p>
            </div>
          </div>
          <div>
            <h4 className="body roboto-500">
              {t("_pages:home.applications.typography.title")}
            </h4>
            <p className="body">
              {t("_pages:home.applications.typography.name")}
            </p>
            <p className="body">
              {t("_pages:home.applications.typography.profession")}
            </p>
            <p className="body">
              {t("_pages:home.applications.typography.contactInfo")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
          <div className="flex flex-col gap-5">
            <PresentationCard color="#D7942E" />
            <PresentationCardBack color="#D7942E" />
          </div>
          <div className="flex flex-col gap-5">
            <PresentationCard color="#00997B" />
            <PresentationCardBack color="#00997B" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Applications;