import { Outlet } from "react-router-dom";

function MainContainer() {
  return (
    <div className="mx-auto max-w-7xl">
      <Outlet />
    </div>
  );
}

export default MainContainer;
