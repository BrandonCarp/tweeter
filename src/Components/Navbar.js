import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <>
      <nav className="relative mx-auto mb-10 mt-3 md:mb-[5rem]">
        <ul className="flex-row items-center   md:pl-10 md:flex ">
          <li className="absolute  left-0 ml-7 mt-3  text-baselg   md:invisible">
            <NavLink to="/hamburgerlink">
              <GiHamburgerMenu />
            </NavLink>
          </li>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 100 }}
              exit={{ opacity: 0 }}
            >
              <li className="text-baselg flex   justify-center  ">
                {/* Make a icon */}
                <NavLink to="/">Tweeter</NavLink>
              </li>
            </motion.div>
          </AnimatePresence>

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
  );
}
