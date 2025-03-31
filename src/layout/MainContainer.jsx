import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainContainer() {
  return (
    <div className="h-dvh bg-amber-300">
      <div className="font-comic mx-auto max-h-dvh">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default MainContainer;
