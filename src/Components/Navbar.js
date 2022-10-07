import { useState } from "react"
import {  NavLink, useNavigate } from "react-router-dom"
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'



export function Navbar() {

  const [burgerMenu, setBurgerMenu] = useState(false);
  const navigate = useNavigate();
  return <>




<button className="" onClick={()=> navigate(-1)}><GrClose /></button>
 
  <nav className="relative container mx-auto mb-[8rem]">
        <ul className="flex-row items-center   md:pl-10 md:flex ">
          <li className="absolute">
            <NavLink to="/hamburgerlink">
            <GiHamburgerMenu />
            </NavLink>
          </li>
          <li className="text-baselg flex   justify-center  ">
            {/* Make a icon */}
            <NavLink  to="/">Logo Here  </NavLink>
          </li>
          <div className="invisible absolute right-0 mr-5  space-x-5 flex md:visible">
          <li className="">
            <NavLink to="/usersearch">Search Users</NavLink>
          </li>
          <li>
            <NavLink to="/showcase">Showcase</NavLink>
          </li>
          </div>
          
        </ul>
      </nav>
  </>
}