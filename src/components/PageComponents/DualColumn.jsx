import PropTypes from "prop-types";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

function DualColumn(props) {
  const { section, subtitle, bodyCount, content, reverse } = props;

  const { t } = useTranslation();

  const renderBody = useMemo(() => {
    const arrayToRender = [];
    for (let i = 0; i < bodyCount; i++) {
      arrayToRender.push(
        t(`_pages:brandIdentity.${section}.${subtitle}.body.paragraph${i + 1}`)
      );
    }

    return arrayToRender.map((paragraph, i) => (
      <p key={i} className="body">
        {paragraph}
      </p>
    ));
  }, [bodyCount, t, section, subtitle]);

  return (
    <div
      className={`content viewport grid ${
        reverse ? "reverse" : "applications"
      } gap-20 md:gap-10`}
    >
      <div className="basic-column">
        <h2 className="text-2xl">
          {t(`_pages:brandIdentity.${section}.title`)}
        </h2>
        <h4 className="text-xl poppins-700">
          {t(`_pages:brandIdentity.${section}.${subtitle}.title`)}
        </h4>
        {renderBody}
      </div>
      <div className="h-full w-full">{content}</div>
    </div>
  );
}

DualColumn.propTypes = {
  section: PropTypes.string,
  subtitle: PropTypes.string,
  bodyCount: PropTypes.number,
  content: PropTypes.node,
  reverse: PropTypes.bool,
};

export default DualColumn;
