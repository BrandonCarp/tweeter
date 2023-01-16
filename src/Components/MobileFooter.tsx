import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { MdPersonSearch } from "react-icons/md";

export function MobileFooter() {
  const activeClassName: string = "rounded-full bg-gray-300 p-2 "

 
  return (
    <div className="text-white bg-black dark:text-black dark:bg-white">
      <div className="md:mt-[20%] md:m-10 space-y-3 flex flex-col items-center md:items-start md:ml-[20%]  md:h-20">
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
            © 2022 Tweeter™. All Rights Reserved.
          </h1>
        </div>
      </div>

<div className="sticky bottom-0  left-0 right-0 flex justify-center  border-t-[3px] h-20  md:invisible text-white bg-black dark:text-black dark:bg-white">
        <ul className="flex items-center ">
      

          
            <NavLink to="/home" className={({isActive}) => isActive ? activeClassName : undefined}  >
              <AiFillHome className="text-md m-1" />
            </NavLink>
        
          
            <NavLink to="/usersearch" className={({isActive}) => isActive ? activeClassName : undefined}  >
              <MdPersonSearch className="text-md  m-1" />
            </NavLink>
       
         
            <NavLink to="/showcase" className={({isActive}) => isActive ? activeClassName : undefined} >
              <BiHash className="text-md m-1" />
            </NavLink>
    
        </ul>
      </div>
    </div>
  );
}
