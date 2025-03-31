import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/">
      <div className="group flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkePKOeUWnQq4DDzEZj3Sx72CJ4JO9ZYIj6OR-HRaWEUI3Ib3P9Tai_ktv9X00m0SK8oQ&usqp=CAU"
          alt="homer"
          className="z-0 h-16 ease-in-out group-hover:animate-[wiggle_1s_infinite_alternate-reverse_ease-in-out]"
        />
        <p className="font-comic z-10 text-2xl font-bold text-amber-400 group-hover:text-amber-500">
          D'oh!
        </p>
      </div>
    </NavLink>
  );
}

export default Logo;
