import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdPersonSearch } from "react-icons/md";
import { BiHash } from "react-icons/bi";

export function LeftNav() {
  return (
    <div>
      <h1>Tweeter</h1>
      <ul>
        <li>
          <NavLink to="/" className="flex">
            <AiFillHome className="text-md " />
            <span className="pl-3">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/usersearch" className="flex">
            <MdPersonSearch className="text-md " />
            <span className="pl-3">Search Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/showcase" className="flex">
            <BiHash className="text-md " />
            <span className="pl-3">Explore</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
