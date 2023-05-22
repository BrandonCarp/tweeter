import React, { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./Context/ThemeContext";
import { MobileFooter } from "./MobileFooter";

export function Footer() {
  const { theme } = useContext(ThemeContext);
  const windowWidth = useRef([window.innerWidth]);

  return (
    <div id={theme} className=" container mx-auto invisible md:visible bottom-0 left-0 right-0 pt-8 ">
      <div className="  flex flex-col items-center md:items-start md:ml-[20%] ">
        <div className="flex flex-col invisible md:visible  ">
          <h1 className="text-baselg font-bold">DailyVid</h1>
          <ul className=" flex space-x-5 text-sm ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/usersearch">Search</NavLink>
            <NavLink to="/showcase">Explore</NavLink>
          </ul>
        </div>
        <div className="border-b-2 border-black-800 w-[80%]"></div>

        <div className="flex items-center justify-center ">
          <h1 className="font-light ">
            © 2023 DailyVid. All Rights Reserved.
          </h1>
        </div>
      </div>
    </div>
  );
}
