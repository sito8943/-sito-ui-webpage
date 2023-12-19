import { Outlet } from "react-router-dom";

// @sito/ui
import { ToTop } from "@sito/ui";

function View() {
  return (
    <>
      <ToTop />
      <Outlet />
    </>
  );
}

export default View;
