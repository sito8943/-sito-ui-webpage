import { useTranslation } from "react-i18next";

function FileStructure() {
  const { t } = useTranslation();
  return (
    <section className="sgSection">
      <h2 className="sgH2">{t("_pages:sitoGreetInfo.fileStructure.title")}</h2>
      <ul className="sgList">
        <li>
          <code className="sgCode">manifest.json</code> — {t("_pages:sitoGreetInfo.fileStructure.items.manifest")}
        </li>
        <li>
          <code className="sgCode">newtab.html</code>, <code className="sgCode">newtab.js</code> — {t("_pages:sitoGreetInfo.fileStructure.items.newtab")}
        </li>
        <li>
          <code className="sgCode">popup.html</code>, <code className="sgCode">popup.js</code> — {t("_pages:sitoGreetInfo.fileStructure.items.popup")}
        </li>
        <li>
          <code className="sgCode">style.css</code> — {t("_pages:sitoGreetInfo.fileStructure.items.styles")}
        </li>
        <li>
          <code className="sgCode">icon.png</code>, <code className="sgCode">github-brands-solid-full.svg</code> — {t("_pages:sitoGreetInfo.fileStructure.items.icons")}
        </li>
      </ul>
    </section>
  );
}

export default FileStructure;
