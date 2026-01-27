import { useTranslation } from "react-i18next";

function Requirements() {
  const { t } = useTranslation();
  return (
    <section className="sgSection">
      <h2 className="sgH2">{t("_pages:sitoGreetInfo.requirements.title")}</h2>
      <ul className="sgList">
        <li>{t("_pages:sitoGreetInfo.requirements.items.mv3")}</li>
        <li>{t("_pages:sitoGreetInfo.requirements.items.noBuild")}</li>
      </ul>
    </section>
  );
}

export default Requirements;
