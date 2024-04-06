import PropTypes from "prop-types";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

function DualColumn(props) {
  const { section, subtitle, bodyCount, content, bodyRendererClassName } =
    props;

  const { t } = useTranslation();

  const renderBody = useMemo(() => {
    const arrayToRender = [];
    for (let i = 0; i < bodyCount; i++) {
      arrayToRender.push(
        t(`_pages:home.${section}.${subtitle}.body.paragraph${i + 1}`)
      );
    }

    return arrayToRender.map((paragraph, i) => (
      <p key={i} className="body">
        {paragraph}
      </p>
    ));
  }, [bodyCount, t, section, subtitle]);

  return (
    <div className="content viewport grid applications gap-5">
      <div className="flex flex-col items-start justify-start gap-5">
        <h2 className="text-2xl">{t(`_pages:home.${section}.title`)}</h2>
        <h4 className="text-xl poppins-600">
          {t(`_pages:home.${section}.${subtitle}.title`)}
        </h4>
        <div className={`body-renderer ${bodyRendererClassName}`}>
          {renderBody}
        </div>
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
  bodyRendererClassName: PropTypes.string,
};

export default DualColumn;
