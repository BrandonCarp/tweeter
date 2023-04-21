import React,{useContext} from "react";
import { AiOutlineClose } from "react-icons/ai";
import ReactDom from "react-dom";
import "./Styles/darkMode.css"
import { AnimatePresence, motion } from "framer-motion";

import { ThemeContext } from "./Context/ThemeContext";




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




export const Modal = ( closeModal, open, children) => {
  const {theme} = useContext(ThemeContext);
  if (open) return null;
  return ReactDom.createPortal(

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
        <h1 className="">{children}</h1>
       </motion.div>
    </div>
    </AnimatePresence>
     
    
   ,
    document.getElementById("portal")
  );
};
