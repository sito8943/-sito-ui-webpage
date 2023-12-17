import { useMemo } from "react";

// @sito/ui
import { useStyle } from "@sito/ui";

function Concepts() {
  const { colors } = useStyle();

  const background = useMemo(() => `bg-[${colors.basics.default}]`, [colors]);

  return <section id="concepts" className={background}></section>;
}

export default Concepts;
