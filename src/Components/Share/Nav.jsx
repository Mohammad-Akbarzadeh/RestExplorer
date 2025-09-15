import { Link, NavLink } from "react-router";

export default function Nav() {
   
  return (
    <div className="flex items-center justify-start px-16 gap-15 py-4 sm:px-24 sm:py-6">
      <h1 className="text-3xl font-bold border-2 rounded-sm">
        REST<span className="text-blue-600">Countries</span>
      </h1>
      <ul className="text-2xl flex items-center gap-x-4 font-medium text-gray-500 sm:gap-x-6">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/countries"}>Countries</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul> 
    </div>
  );
}
