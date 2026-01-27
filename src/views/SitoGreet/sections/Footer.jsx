import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="sgFooter">
      <a
        className="sgLink"
        href="https://github.com/sito8943/sito-greet"
        target="_blank"
        rel="noreferrer noopener"
      >
        {t("_pages:sitoGreetInfo.footer.viewSource")}
      </a>
    </footer>
  );
}

export default Footer;
