import { useMemo } from "react";

// @emotion/css
import { css } from "@emotion/css";

// @sito/ui
import { useStyle } from "@sito/ui";

function ClearSpace() {
  const { colors } = useStyle();

  const background = useMemo(
    () => css({ background: colors.basics.default }),
    [colors]
  );

  return <section id="clear-space" className={background}></section>;
}

export default ClearSpace;
