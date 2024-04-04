import { useMemo } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function IdentifierGrid(props) {
  const { section, bodyCount } = props;

  const { t } = useTranslation();

  const renderBody = useMemo(() => {
    const arrayToRender = [];
    for (let i = 0; i < bodyCount; i++) {
      arrayToRender.push(
        t(`_pages:home.identifier.${section}.body.paragraph${i + 1}`)
      );
    }
    console.log(bodyCount);
    return arrayToRender.map((paragraph, i) => (
      <p key={i} className="body">
        {paragraph}
      </p>
    ));
  }, [bodyCount, t, section]);

  return (
    <section className="viewport w-full px-20 sm:px-10 py-20 grid grid-cols-2 md:grid-cols-1">
      <div className="flex flex-col items-start justify-start gap-5">
        <h2 className="text-2xl">{t("_pages:home.identifier.title")}</h2>
        <h4 className="text-xl poppins-600">{t(`_pages:home.identifier.${section}.title`)}</h4>
        {renderBody}
      </div>
    </section>
  );
}

IdentifierGrid.propTypes = {
  section: PropTypes.string,
  bodyCount: PropTypes.number,
};

export default IdentifierGrid;
