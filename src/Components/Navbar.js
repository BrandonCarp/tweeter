import { NavLink } from "react-router-dom"

export function Navbar() {
  return <>

  {/* Debating on hamburger menu when on mobile for links to other web pages ? */}
  <nav className="relative container mx-auto mb-[8rem]">
        <ul className="flex-row items-center pt-5  md:pl-10 md:flex ">
          <li className="text-baselg flex   justify-center  ">
            {/* Make a icon */}
            <NavLink  to="/">Logo Here </NavLink>
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