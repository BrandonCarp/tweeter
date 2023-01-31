import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { BsHouse } from "react-icons/bs";
import { BiHash } from "react-icons/bi";
import { MdPersonSearch } from "react-icons/md";
import { ThemeContext } from "./Context/ThemeContext";


export function MobileFooter() {
  
  const {theme} = useContext(ThemeContext);
 
  return (
    <div className="">
      <div className="md:mt-10 mb-20 md:mb-0  space-y-3 flex flex-col items-center md:items-start md:ml-[20%]  md:h-20">
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

<div id={theme} className="bg-white mainFooter fixed md:sticky bottom-0  left-0 right-0 flex justify-center   h-20  md:invisible ">
        <ul className="flex items-center ">
      

          
            <NavLink to="/"   >
              <BsHouse className="text-md m-1 " />
            </NavLink>
        
          
            <NavLink to="/usersearch"  >
              <MdPersonSearch className="text-md  m-1" />
            </NavLink>
       
         
            <NavLink to="/showcase"  >
              <BiHash className="text-md m-1" />
            </NavLink>
    
        </ul>
      </div>
    </div>
  );
}
