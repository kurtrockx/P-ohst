import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainContainer() {
  return (
    <div className="min-h-dvh bg-amber-300">
      <div className="font-comic mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default MainContainer;
