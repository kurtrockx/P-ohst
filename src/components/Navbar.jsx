import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="px-4 py-2 shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <ul className="text-shadow-sm font-comic flex gap-4">
          <li className="font-semibold text-amber-400 hover:text-amber-500">
            <NavLink to="/addPost">ADD POST</NavLink>
          </li>
          <li className="font-semibold text-amber-400 hover:text-amber-500">
            <NavLink to="/posts">POSTS</NavLink>
          </li>
          <li className="font-semibold text-amber-400 hover:text-amber-500">
            <NavLink to="/user">USER</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
