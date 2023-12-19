import { useMemo } from "react";
import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @sito/ui
import { useStyle } from "@sito/ui";

function Card({ color = "basics", inverted, bordered, className, children }) {
  const { colors } = useStyle();

  const borderedClass = useMemo(() => {
    return bordered
      ? css({
          border: `1px ${
            inverted ? colors[color].text : colors[color].default
          } solid`,
        })
      : null;
  }, [colors, color, bordered, inverted]);

  const colorClass = useMemo(() => {
    const cssPreStyle = {
      color: inverted ? colors[color].default : colors[color].text,
    };
    if (!bordered)
      cssPreStyle.background = inverted
        ? colors[color].text
        : colors[color].default;
    return css(cssPreStyle);
  }, [color, colors, inverted, bordered]);

  return (
    <div
      className={`${borderedClass} ${colorClass} ${className} rounded-lg min-h-[500px]`}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "error",
    "success",
    "info",
    "basics",
  ]),
  inverted: PropTypes.bool,
  bordered: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Card;
