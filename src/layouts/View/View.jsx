import { Outlet } from "react-router-dom";

// components
import ToTop from "../../components/ToTop/ToTop";

function View() {
  return (
    <main>
      <ToTop />
      <Outlet />
    </main>
  );
}

export default View;
