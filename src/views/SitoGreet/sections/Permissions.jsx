import { useTranslation } from "react-i18next";

function Permissions() {
  const { t } = useTranslation();
  return (
    <section className="sgSection">
      <h2 className="sgH2">{t("_pages:sitoGreetInfo.permissions.title")}</h2>
      <ul className="sgList">
        <li>
          <code className="sgCode">storage</code> — {t("_pages:sitoGreetInfo.permissions.usedToSave")} <code className="sgCode">username</code> {t("_pages:sitoGreetInfo.permissions.and")} <code className="sgCode">profile_name</code> {t("_pages:sitoGreetInfo.permissions.locally")}
        </li>
      </ul>
    </section>
  );
}

export default Permissions;
