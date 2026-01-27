import { useTranslation } from "react-i18next";

function Packaging() {
  const { t } = useTranslation();
  return (
    <section className="sgSection">
      <h2 className="sgH2">{t("_pages:sitoGreetInfo.packaging.title")}</h2>
      <ul className="sgList">
        <li>
          {t("_pages:sitoGreetInfo.packaging.items.buildUnsigned.pre")} <code className="sgCode">web-ext build</code> {t("_pages:sitoGreetInfo.packaging.items.buildUnsigned.post")} <code className="sgCode">web-ext-artifacts/</code>).
        </li>
        <li>
          {t("_pages:sitoGreetInfo.packaging.items.sign.pre")} <code className="sgCode">web-ext sign --api-key &lt;AMO_JWT_ISSUER&gt; --api-secret &lt;AMO_JWT_SECRET&gt;</code>
        </li>
      </ul>
    </section>
  );
}

export default Packaging;
