import React, {useContext} from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import homeImg from "./HomeImgs/homePage.jpg";
import { BsArrowRightCircle } from "react-icons/bs";
import { Footer } from "../Footer";
import { MobileFooter } from "../MobileFooter";
import { ThemeContext } from "../Context/ThemeContext";

export const Hero = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div id={ThemeContext} className=" relative container mx-auto  ">
        <div className="flex flex-col items-center  justify-center      space-y-5">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center "
          >
            <h1 className="text-[1.2rem]  md:text-xl">
              Connecting people online everyday
            </h1>

            <ul>
              <li className=" md:text-baselg pt-3">
                <motion.p whileHover={{ scale: 1.1 }}>
                  <NavLink to="/usersearch">
                    <BsArrowRightCircle className="inline text-baselg mb-1 mr-2 " />
                    Check Out Some New Videos
                  </NavLink>
                </motion.p>
              </li>
            </ul>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: +100 }}
            animate={{ opacity: 1, x: 0 }}
            className="pt-4 px-5 pb-5 md:px-[4rem] md:pb-[4rem]   lg:w-[1200px]"
            src={homeImg}
            alt="friends laughing"
          />
          <div className=" mx-auto container relative flex  flex-col items-center justify-center ">
            <h1 className="md:text-xl text-md font-bold">DailyVid</h1>
            <p className=" text-center p-5 text-baselg md:mb-10 md:px-[2.5rem]">
              DailyVid is a application that is designed to help people connect,
              and find videos of interest.
            </p>
          </div>
        </div> 
       
        
      </div>
      <Footer />
      <MobileFooter />
    </>
  );
};
