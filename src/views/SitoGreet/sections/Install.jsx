import { useTranslation } from "react-i18next";

function Install() {
  const { t } = useTranslation();
  return (
    <section className="sgSection">
      <h2 className="sgH2">{t("_pages:sitoGreetInfo.install.title")}</h2>
      <ol className="sgList">
        <li>
          {t("_pages:sitoGreetInfo.install.steps.openDebugging.pre")} <code className="sgCode">about:debugging#/runtime/this-firefox</code>.
        </li>
        <li>{t("_pages:sitoGreetInfo.install.steps.loadTemporary")}</li>
        <li>
          {t("_pages:sitoGreetInfo.install.steps.selectManifest.pre")} <code className="sgCode">manifest.json</code>.
        </li>
        <li>{t("_pages:sitoGreetInfo.install.steps.openNewTab")}</li>
      </ol>
      <p className="sgP sgNote">{t("_pages:sitoGreetInfo.install.note")}</p>
    </section>
  );
}

export default Install;
