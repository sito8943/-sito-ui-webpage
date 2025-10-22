import { useTranslation } from "react-i18next";

function Typography() {
  const { t } = useTranslation();

  return (
    <div className="content viewport flex flex-col items-start justify-start applications gap-5">
      <h2 className="text-2xl">{t(`_pages:brandIdentity.resources.title`)}</h2>
      <h4 className="text-xl poppins-700">
        {t(`_pages:brandIdentity.resources.typography.title`)}
      </h4>
      <div className="flex flex-col items-start justify-start gap-10">
        <div className="gap-10 grid applications w-full">
          <p className="body">
            {t("_pages:brandIdentity.resources.typography.body.paragraph1")}
          </p>
          <p className="futura text-4xl md:text-2xl sm:text-xl xs:text-base">
            1234567890!”#$%& <span className="text-primary">{"</>"}</span>()={" "}
            <br />
            abcdefghijklmnñopqrstuvwxyz <br />
            ABCDEFGHIJKLMNÑOPQR<span className="text-primary">S</span>TUVWXYZ
          </p>
        </div>
        <div className="gap-10 grid applications w-full">
          <p className="body">
            {t("_pages:brandIdentity.resources.typography.body.paragraph1")}
          </p>
          <p className="poppins-600 text-4xl md:text-2xl sm:text-xl xs:text-base">
            1234567890!”#$%&{"</>"}()= <br />
            abcdefghijklmnñopqrs<span className="text-green">t</span>uvwxyz{" "}
            <br />
            ABCDEFGHIJKLMNÑOPQRSTUVWXYZ
          </p>
        </div>
        <div className="gap-10 grid applications w-full">
          <p className="body">
            {t("_pages:brandIdentity.resources.typography.body.paragraph1")}
          </p>
          <p className="roboto-300 text-4xl md:text-2xl sm:text-xl xs:text-base ">
            1234567890!”#$%& <span className="text-yellow">{"</>"}</span>()={" "}
            <br />
            abcdefghijklmnñ<span className="text-yellow">
              o
            </span>pqrstuvwxyz <br />
            ABCDEFGHIJKLMNÑOPQRSTUVWXYZ
          </p>
        </div>
      </div>
    </div>
  );
}

export default Typography;
