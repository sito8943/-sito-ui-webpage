import { useTranslation } from "react-i18next";

function Introduction() {
  const { t } = useTranslation();

  return (
    <section className="content viewport flex flex-col items-start justify-start">
      <h2 className="text-2xl mb-10">{t("_pages:home.introduction.title")}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-10 sm:gap-5">
        <div className="flex flex-col gap-5">
          <p className="body">
            {t("_pages:home.introduction.leftColumn.block1")}
          </p>
          <p className="body">
            {t("_pages:home.introduction.leftColumn.block2")}
          </p>
          <p className="body">
            {t("_pages:home.introduction.leftColumn.block3")}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="body">
            {t("_pages:home.introduction.rightColumn.block1")}
          </p>
          <p className="body">
            {t("_pages:home.introduction.rightColumn.block2")}
          </p>
          <p className="body">
            {t("_pages:home.introduction.rightColumn.block3")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
