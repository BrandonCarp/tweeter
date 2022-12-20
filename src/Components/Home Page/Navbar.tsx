import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Modal } from "../Modal";
import { motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


 
  return (
    <>
      <nav className="sticky top-0 relative container mx-auto p-5 ">
        <ul className="flex-row items-center   md:pl-10 md:flex ">
          <li className="absolute  left-0 ml-7 mt-3  text-baselg   md:invisible">
            <button onClick={() => setIsOpen(true)}>
              <GiHamburgerMenu />
            </button>

            <Modal onClose={() => setIsOpen(false)} open={isOpen}>
              <ul className="space-y-3 text-baselg flex flex-col items-center">
                <motion.li className="" whileHover={{ scale: 1.1 }}>
                  <NavLink to="/" className=" p-1">
                    <button onClick={() => setIsOpen(false)}>Home</button>
                  </NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <NavLink to="/usersearch" className="">
                    <button onClick={() => setIsOpen(false)}>
                      Search Users
                    </button>
                  </NavLink>
                </motion.li>
                <motion.li className="" whileHover={{ scale: 1.1 }}>
                  <NavLink to="/showcase" className="">
                    <button onClick={() => setIsOpen(false)}>Explore</button>
                  </NavLink>
                </motion.li>
              </ul>
            </Modal>
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
