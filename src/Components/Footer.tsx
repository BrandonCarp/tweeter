import React, {useContext, useRef} from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./Context/ThemeContext";
import { MobileFooter } from "./MobileFooter";



export function Footer() {
  
  const {theme} = useContext(ThemeContext);
  const windowWidth = useRef([window.innerWidth]);
  
//  windowWidth.current
  return (
   <div className="relative container mx-auto ">

   <div className=" space-y-3 flex flex-col items-center md:items-start md:ml-[20%] md:mt-20    ">
        <div className="flex flex-col invisible md:visible  ">
          <h1 className="text-baselg font-bold">Tweeter</h1>
          <ul className=" flex space-x-5 text-sm ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/usersearch">Search Users</NavLink>
            <NavLink to="/showcase">Showcase</NavLink>
          </ul>
        </div>
        <div className="border-b-2 border-black-800 w-[80%]"></div>

        <div className="flex items-center justify-center ">
          <h1 className="font-light pb-5">
            © 2023 Tweeter™. All Rights Reserved.
          </h1>
        </div>
      </div>
{/* <MobileFooter /> */}
</div>
   
  );
}
