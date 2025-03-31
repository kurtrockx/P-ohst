import { Outlet } from "react-router-dom";

function MainContainer() {
  return (
    <div className="mx-auto max-h-dvh max-w-7xl bg-amber-400">
      <Outlet />
    </div>
  );
}

export default MainContainer;
