import { Outlet } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import ToTop from "../../components/ToTop/ToTop";

function Natural() {
  return (
    <main>
      <ToTop />
      <Navbar />
      <Outlet />
    </main>
  );
}

export default Natural;
