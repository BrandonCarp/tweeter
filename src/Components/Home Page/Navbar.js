import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <>
      <nav className="relative container mx-auto  p-5">
        <ul className="flex-row items-center   md:pl-10 md:flex ">
          <li className="absolute  left-0 ml-7 mt-3  text-baselg   md:invisible">
            <NavLink to="/hamburgerlink">
              <GiHamburgerMenu />
            </NavLink>
          </li>

          <li className="text-baselg flex pt-2   justify-center ">
            {/* Make a icon */}
            <NavLink to="/">Tweeter</NavLink>
          </li>

          <div className="invisible absolute right-0 mr-5  space-x-5 flex  md:visible">
            <motion.li className="" whileHover={{ scale: 1.1 }}>
              <NavLink to="/usersearch">Search Users</NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <NavLink to="/showcase">Explore</NavLink>
            </motion.li>
          </div>
        </ul>
      </nav>
    </>
  );
}
