import React,{useContext} from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Styles/darkMode.css"
import { AnimatePresence, motion } from "framer-motion";
import { ThemeContext } from "./Context/ThemeContext";
import { NavLink } from "react-router-dom";



const modal_styles = {
  position: "fixed",
  top: 0,
  width: "100%",
  height: "",
 padding: "15px",
  zIndex: 1000,
};
const overlay_styles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};




export const Modal = ( {closeModal} ) => {
  const {theme} = useContext(ThemeContext);
  
  return (

    <AnimatePresence>
 <div
      
      style={overlay_styles}  className=''  >
      <motion.div
      initial={{ y: -150}}
      animate={{ y: 0}}
      
      transition={{ease:"easeIn", duration: .4}}
      id={theme} style={modal_styles}  className="" >
        <button onClick={closeModal} className="fixed top-2 left-2 ">
          <AiOutlineClose id={theme} className="text-[1.4rem]"/>
        </button>
        <ul className=" space-y-3 text-baselg flex flex-col items-center ">
                <motion.li className="" whileHover={{ scale: 1.1 }}>
                  <NavLink to="/" className=" p-1">
                    <button onClick={closeModal}>Home</button>
                  </NavLink>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <NavLink to="/usersearch" className="">
                    <button onClick={closeModal}>Search</button>
                  </NavLink>
                </motion.li>
                <motion.li className="" whileHover={{ scale: 1.1 }}>
                  <NavLink to="/showcase" className="">
                    <button onClick={closeModal}>Explore</button>
                  </NavLink>
                </motion.li>
              </ul>
       </motion.div>
    </div>
    </AnimatePresence>
     
  );
};
