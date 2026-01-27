import { useTranslation } from "react-i18next";

function Features() {
  const { t } = useTranslation();
  return (
    <section className="sgSection">
      <h2 className="sgH2">{t("_pages:sitoGreetInfo.features.title")}</h2>
      <ul className="sgList">
        <li>{t("_pages:sitoGreetInfo.features.items.newTab")}</li>
        <li>{t("_pages:sitoGreetInfo.features.items.liveClock")}</li>
        <li>
          {t("_pages:sitoGreetInfo.features.items.customizable")}
          {" "}
          (<code className="sgCode">storage</code>).
        </li>
        <li>{t("_pages:sitoGreetInfo.features.items.toolbar")}</li>
        <li>{t("_pages:sitoGreetInfo.features.items.inPageSettings")}</li>
        <li>{t("_pages:sitoGreetInfo.features.items.background")}</li>
        <li>
          {t("_pages:sitoGreetInfo.features.items.minimalPermissions.pre")} {" "}
          <code className="sgCode">storage</code>
          {t("_pages:sitoGreetInfo.features.items.minimalPermissions.post")}
        </li>
      </ul>
    </section>
  );
}

export default Features;
