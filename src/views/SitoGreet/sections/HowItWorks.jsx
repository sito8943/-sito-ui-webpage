import { useTranslation } from "react-i18next";

function HowItWorks() {
  const { t } = useTranslation();
  return (
    <section className="sgSection">
      <h2 className="sgH2">{t("_pages:sitoGreetInfo.howItWorks.title")}</h2>
      <ul className="sgList">
        <li>
          <code className="sgCode">manifest.json</code> {t("_pages:sitoGreetInfo.howItWorks.items.manifest.pre")} <code className="sgCode">newtab.html</code> {t("_pages:sitoGreetInfo.howItWorks.items.manifest.post")} (<code className="sgCode">popup.html</code>).
        </li>
        <li>
          <code className="sgCode">newtab.js</code> {t("_pages:sitoGreetInfo.howItWorks.items.newtab.pre")} <code className="sgCode">browser.storage.local</code>.
        </li>
        <li>{t("_pages:sitoGreetInfo.howItWorks.items.styling.pre")} <code className="sgCode">style.css</code> {t("_pages:sitoGreetInfo.howItWorks.items.styling.post")}</li>
      </ul>
    </section>
  );
}

export default HowItWorks;
