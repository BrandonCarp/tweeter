import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdPersonSearch } from "react-icons/md";
import { BiHash } from "react-icons/bi";

export const LeftNav = () => {
  return (
    <div className="">
      <div className="space-y-5 border-gray-400">
      <h1>Tweeter</h1>
      <ul className="space-y-5">
        <li>
          <NavLink to="/" className="flex">
            <AiFillHome className="text-md " />
            <span className="pl-3 invisible md:visible">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/usersearch" className="flex">
            <MdPersonSearch className="text-md " />
            <span className="pl-3 invisible md:visible">Search Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/showcase" className="flex">
            <BiHash className="text-md " />
            <span className="pl-3 invisible md:invisible">Explore</span>
          </NavLink>
        </li>
      </ul>
      </div>
     
    </div>
  );
}
