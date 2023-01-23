import React, {useState, useContext } from "react";
import ReactSwitch from "react-switch";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Modal } from "../Modal";
import { motion } from "framer-motion";
import { ThemeContext } from "src/App";
// Icons
// import {BsFillSunFill, BsMoonFill, BsCheck, BsSunFill} from 'react-icons/bs';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


const openModal = (e:  React.MouseEvent<HTMLButtonElement>) => {
   setIsOpen(true);
}

const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
 setIsOpen(false);
}
 
  return (
    <div className="text-primaryLight bg-secondaryPurple dark:text-black dark:primaryLight">
      <nav className="sticky top-0 relative container mx-auto p-5 ">
        <ul className="flex-row items-center   md:pl-10 md:flex ">
          <li className="absolute  left-0 ml-7 mt-3  text-baselg   md:invisible">
            <button onClick={openModal}>
              <GiHamburgerMenu />
            </button>

            <Modal closeModal={closeModal} open={isOpen} 
            >
              <ul className="space-y-3 text-baselg flex flex-col items-center text-white">
                <motion.li className="" whileHover={{ scale: 1.1 }}>
                  <NavLink to="/" className=" p-1">
                    <button onClick={closeModal}>Home</button>
                  </NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <NavLink to="/usersearch" className="">
                    <button onClick={closeModal}>
                      Search Users
                    </button>
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
            {/* Make a icon */}
            
            <NavLink to="/" className="font-bold">Tweeter</NavLink>
            
          </li>
         
          

          <div className="invisible absolute right-0 mr-5  space-x-5 flex  md:visible">
         
            <motion.li className="" whileHover={{ scale: 1.1 }}>
              <NavLink to="/usersearch">Search Users</NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <NavLink to="/showcase">Explore</NavLink>
            </motion.li>
           {/* <ReactSwitch className="visible absolute right-3 bottom-7 md:static"  onChange={toggleTheme} checked={theme === 'dark'} /> */}
           
          </div>
          
        </ul>
      </nav>
    </div>
  );
}
