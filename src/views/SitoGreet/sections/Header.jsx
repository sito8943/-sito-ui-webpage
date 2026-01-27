import Preview from "./Preview";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <header className="sgHeader">
      <h1 className="sgTitle">{t("_pages:sitoGreetInfo.header.title")}</h1>
      <p className="sgTag">{t("_pages:sitoGreetInfo.header.tag")}</p>
      <Preview />
    </header>
  );
}

export default Header;
