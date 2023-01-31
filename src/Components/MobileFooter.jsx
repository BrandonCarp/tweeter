import React from "react"
import { NavLink } from "react-router-dom";
import { BsHouse } from "react-icons/bs";
import { BiHash } from "react-icons/bi";
import { MdPersonSearch } from "react-icons/md";

export const MobileFooter = () => {
  return (
    <>
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
    </>
  )
}