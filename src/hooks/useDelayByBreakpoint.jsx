import { useCallback } from "react";

// @sito/ui
import { useScreenHandler } from "@sito/ui";

function useDelayByBreakpoint() {
  const { breakpoint } = useScreenHandler();

  const delayByBreakpoint = useCallback(
    (breakpoints = [], delays = []) => {
      let indexOf = breakpoints.indexOf(breakpoint);
      if (indexOf === -1) indexOf = 0;
      return delays[indexOf];
    },
    [breakpoint]
  );

  return { delayByBreakpoint };
}

export default useDelayByBreakpoint;
