import { useTranslation } from "react-i18next";

const flagKeys = [
  "weather",
  "backgroundCustomization",
  "animations",
  "clock",
  "profileDisplay",
  "debugMode",
  "pinnedTabs",
  "recentHistory",
];

function FeatureFlags() {
  const { t } = useTranslation();

  return (
    <section className="sgSection">
      <h2 className="sgH2">{t("_pages:sitoGreetInfo.featureFlags.title")}</h2>
      <p className="sgP">{t("_pages:sitoGreetInfo.featureFlags.intro")}</p>
      <p className="sgP sgNote">{t("_pages:sitoGreetInfo.featureFlags.openPanel")}</p>
      <ul className="sgList">
        {flagKeys.map((flag) => (
          <li key={flag}>
            <code className="sgCode">{flag}</code>{" "}
            ({t(`_pages:sitoGreetInfo.featureFlags.flags.${flag}.default`)}):{" "}
            {t(`_pages:sitoGreetInfo.featureFlags.flags.${flag}.description`)}
          </li>
        ))}
      </ul>
      <p className="sgP sgNote">{t("_pages:sitoGreetInfo.featureFlags.persistence")}</p>
      <p className="sgP sgNote">{t("_pages:sitoGreetInfo.featureFlags.reset")}</p>
    </section>
  );
}

export default FeatureFlags;
