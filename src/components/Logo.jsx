import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/">
      <div className="flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkePKOeUWnQq4DDzEZj3Sx72CJ4JO9ZYIj6OR-HRaWEUI3Ib3P9Tai_ktv9X00m0SK8oQ&usqp=CAU"
          alt="homer"
          className="h-16"
        />
        <p className="font-comic text-2xl font-bold text-amber-400">D'oh!</p>
      </div>
    </NavLink>
  );
}

export default Logo;
