import { useTranslation } from "react-i18next";

function Notes() {
  const { t } = useTranslation();
  return (
    <section className="sgSection">
      <h2 className="sgH2">{t("_pages:sitoGreetInfo.notes.title")}</h2>
      <ul className="sgList">
        <li>
          {t("_pages:sitoGreetInfo.notes.items.clock.pre")} <code className="sgCode">navigator.language</code> {t("_pages:sitoGreetInfo.notes.items.clock.mid")} <code className="sgCode">es-ES</code> {t("_pages:sitoGreetInfo.notes.items.clock.post")}
        </li>
        <li>
          {t("_pages:sitoGreetInfo.notes.items.links.pre")} <code className="sgCode">newtab.html</code>, {t("_pages:sitoGreetInfo.notes.items.links.mid")} <code className="sgCode">href</code> {t("_pages:sitoGreetInfo.notes.items.links.post")}
        </li>
      </ul>
    </section>
  );
}

export default Notes;
