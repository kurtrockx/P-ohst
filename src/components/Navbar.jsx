import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-white px-4 py-2 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <ul className="text-shadow-sm font-comic flex gap-4">
          <li className="font-semibold hover:text-amber-500">
            <NavLink to="/addPost">ADD POST</NavLink>
          </li>
          <li className="font-semibold hover:text-amber-500">
            <NavLink to="/posts">POSTS</NavLink>
          </li>
          <li className="font-semibold hover:text-amber-500">
            <NavLink to="/user">USER</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
