import { Outlet } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import ToTop from "../../components/ToTop/ToTop";

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
