import { useTranslation } from "react-i18next";

function Usage() {
  const { t } = useTranslation();
  return (
    <section className="sgSection">
      <h2 className="sgH2">{t("_pages:sitoGreetInfo.usage.title")}</h2>
      <ul className="sgList">
        <li>{t("_pages:sitoGreetInfo.usage.items.openNewTab")}</li>
        <li>
          {t("_pages:sitoGreetInfo.usage.items.openPopup")}
          <ul>
            <li>
              {t("_pages:sitoGreetInfo.usage.items.name")} (<code className="sgCode">username</code>)
            </li>
            <li>
              {t("_pages:sitoGreetInfo.usage.items.profileName")} (<code className="sgCode">profile_name</code>)
            </li>
          </ul>
        </li>
        <li>
          {t("_pages:sitoGreetInfo.usage.items.inPageSettings")}
        </li>
        <li>
          {t("_pages:sitoGreetInfo.usage.items.background")}
        </li>
      </ul>
    </section>
  );
}

export default Usage;
