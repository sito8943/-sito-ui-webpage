import { Outlet } from "react-router-dom";

// @sito/ui
import { ToTop } from "@sito/ui";

// components
import Navbar from "./components/Navbar";

function View() {
  return (
    <>
      <Navbar />
      <ToTop />
      <Outlet />
    </>
  );
}

export default View;
