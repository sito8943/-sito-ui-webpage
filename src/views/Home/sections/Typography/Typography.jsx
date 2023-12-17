import { useMemo } from "react";

import { useStyle } from "@sito/ui";

function Typography() {
  const { colors } = useStyle();

  const background = useMemo(() => `bg-[${colors.basics.default}]`, [colors]);

  return <section id="typography" className={background}></section>;
}

export default Typography;
