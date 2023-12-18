import { useMemo } from "react";

// @emotion/css
import { css } from "@emotion/css";

// @sito/ui
import { useStyle } from "@sito/ui";

function Concepts() {
  const { colors } = useStyle();

  const background = useMemo(
    () => css({ background: colors.basics.default }),
    [colors]
  );

  return <section id="concepts" className={background}></section>;
}

export default Concepts;
