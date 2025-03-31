import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 shadow">
      <Logo />
      <ul className="text-shadow-sm font-comic flex gap-4">
        <li className="font-semibold text-amber-400">
          <NavLink to="/addPost">ADD POST</NavLink>
        </li>
        <li className="font-semibold text-amber-400">
          <NavLink to="/posts">POSTS</NavLink>
        </li>
        <li className="font-semibold text-amber-400">
          <NavLink to="/user">USER</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
