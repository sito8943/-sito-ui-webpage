import { useTranslation } from "react-i18next";

function Development() {
  const { t } = useTranslation();
  return (
    <section className="sgSection">
      <h2 className="sgH2">{t("_pages:sitoGreetInfo.development.title")}</h2>
      <ul className="sgList">
        <li>
          {t("_pages:sitoGreetInfo.development.items.recommended.pre")} <code className="sgCode">web-ext</code> {t("_pages:sitoGreetInfo.development.items.recommended.post")}
        </li>
        <li>
          {t("_pages:sitoGreetInfo.development.items.install")} <code className="sgCode">npm install -g web-ext</code>
        </li>
        <li>
          {t("_pages:sitoGreetInfo.development.items.run")} <code className="sgCode">web-ext run</code>
        </li>
        <li>
          {t("_pages:sitoGreetInfo.development.items.build")} <code className="sgCode">web-ext build</code>
        </li>
      </ul>
      <p className="sgP sgNote">{t("_pages:sitoGreetInfo.development.note.pre")} <code className="sgCode">newtab.*</code> {t("_pages:sitoGreetInfo.development.note.mid")} <code className="sgCode">style.css</code> {t("_pages:sitoGreetInfo.development.note.mid2")} <code className="sgCode">browser.storage.local</code> {t("_pages:sitoGreetInfo.development.note.post")}</p>
    </section>
  );
}

export default Development;
