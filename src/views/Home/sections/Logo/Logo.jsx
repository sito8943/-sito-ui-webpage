import { useMemo } from "react";

// @sito/ui
import { useStyle } from "@sito/ui";

function Logo() {
  const { colors } = useStyle();

  const background = useMemo(() => `bg-[${colors.basics.default}]`, [colors]);

  return <section id="logo" className={background}></section>;
}

export default Logo;
