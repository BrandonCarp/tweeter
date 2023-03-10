import React, { useState, useContext } from "react";
import "../Styles/darkMode.css";
import ReactSwitch from "react-switch";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Modal } from "../Modal";
import { motion } from "framer-motion";

import { ThemeContext } from "../Context/ThemeContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const { toggleTheme } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div id={theme} className="mainNav navDark ">
      <nav className="sticky top-0 relative container mx-auto p-5 ">
        <ul className="flex-row items-center   md:pl-10 md:flex ">
          <li className="absolute  left-0 ml-7 mt-3  text-baselg   md:invisible">
            <button onClick={openModal}>
              <GiHamburgerMenu />
            </button>

            <Modal closeModal={closeModal} open={isOpen}>
              <ul className=" space-y-3 text-baselg flex flex-col items-center ">
                <motion.li className="" whileHover={{ scale: 1.1 }}>
                  <NavLink to="/" className=" p-1">
                    <button onClick={closeModal}>Home</button>
                  </NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <NavLink to="/usersearch" className="">
                    <button onClick={closeModal}>Video Search</button>
                  </NavLink>
                </motion.li>
                <motion.li className="" whileHover={{ scale: 1.1 }}>
                  <NavLink to="/showcase" className="">
                    <button onClick={closeModal}>Explore</button>
                  </NavLink>
                </motion.li>
              </ul>
            </Modal>
          </li>

          <li className="text-baselg flex pt-2   justify-center space-x-5">
            <NavLink to="/" className="font-bold ">
              DailyVid
            </NavLink>
          </li>

          <div className="invisible absolute right-0 mr-5  space-x-5 flex  md:visible">
            <motion.li className="" whileHover={{ scale: 1.1 }}>
              <NavLink to="/usersearch">Video Search</NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <NavLink to="/showcase">Explore</NavLink>
            </motion.li>
            <ReactSwitch
              className="visible absolute bottom-8 md:bottom-0  md:static"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
          </div>
        </ul>
      </nav>
    </div>
  );
}