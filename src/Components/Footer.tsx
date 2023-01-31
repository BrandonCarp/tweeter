import React, {useContext, useRef} from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./Context/ThemeContext";



export function Footer() {
  
  const {theme} = useContext(ThemeContext);
  const windowWidth = useRef([window.innerWidth]);
  
 
  return (
    <div className="">
      <div className="mb-20 md:mt-10 md:mb-5  space-y-3 flex flex-col items-center md:items-start md:ml-[20%]  md:h-20">
        <div className="flex flex-col invisible md:visible  ">
          <h1 className="text-baselg font-bold">Tweeter</h1>
          <ul className=" flex space-x-5 text-sm ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/usersearch">Search Users</NavLink>
            <NavLink to="/showcase">Showcase</NavLink>
          </ul>
        </div>
        <div className="border-b-2 border-black-800 w-[80%]"></div>

        <div className="flex items-center justify-center p-5">
          <h1 className="font-light mb-5">
            © 2023 Tweeter™. All Rights Reserved.
          </h1>
        </div>
      </div>
      {windowWidth.current > 768 ? <h1>Hi</h1> : null }

    </div>
  );
}
