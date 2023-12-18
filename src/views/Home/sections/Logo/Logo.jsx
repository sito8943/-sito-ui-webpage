import { useMemo } from "react";

// @emotion/css
import { css } from "@emotion/css";

// @sito/ui
import { useStyle } from "@sito/ui";

function Logo() {
  const { colors } = useStyle();

  const background = useMemo(
    () => css({ background: colors.basics.default }),
    [colors]
  );

  return <section id="logo" className={background}></section>;
}

export default Logo;
