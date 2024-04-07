import { Outlet } from "react-router-dom";

// components
import ToTop from "../../components/ToTop/ToTop";
import Navbar from "../Natural/components/Navbar";

function View() {
  return (
    <main>
      <ToTop />
      <Navbar />
      <Outlet />
    </main>
  );
}

export default View;
