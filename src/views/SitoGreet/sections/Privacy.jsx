import { useTranslation } from "react-i18next";

function Privacy() {
  const { t } = useTranslation();
  return (
    <section className="sgSection" id="privacy">
      <h2 className="sgH2">{t("_pages:sitoGreetInfo.privacy.title")}</h2>
      <p className="sgP">{t("_pages:sitoGreetInfo.privacy.intro.pre")} <code className="sgCode"> browser.storage.local</code>. {t("_pages:sitoGreetInfo.privacy.intro.post")}</p>
      <ul className="sgList" style={{ marginTop: 12 }}>
        <li>
          {t("_pages:sitoGreetInfo.privacy.items.data.pre")} (<code className="sgCode">username</code>), {t("_pages:sitoGreetInfo.privacy.items.data.mid")} (<code className="sgCode">profile_name</code>), {t("_pages:sitoGreetInfo.privacy.items.data.post")}
        </li>
        <li>
          {t("_pages:sitoGreetInfo.privacy.items.scope.pre")} <code className="sgCode"> browser.storage.local</code> {t("_pages:sitoGreetInfo.privacy.items.scope.post")}
        </li>
        <li>
          {t("_pages:sitoGreetInfo.privacy.items.permissions.pre")} <code className="sgCode"> storage</code> {t("_pages:sitoGreetInfo.privacy.items.permissions.post")}
        </li>
        <li>
          {t("_pages:sitoGreetInfo.privacy.items.links")}
        </li>
        <li>
          {t("_pages:sitoGreetInfo.privacy.items.removal")}
        </li>
      </ul>
      <p className="sgP sgNote" style={{ marginTop: 12 }}>
        {t("_pages:sitoGreetInfo.privacy.note")}
      </p>
    </section>
  );
}

export default Privacy;
