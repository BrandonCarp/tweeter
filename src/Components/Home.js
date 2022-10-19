import { Navbar } from "./Navbar";

import { Hero } from "./Hero";
import { AnimatePresence, motion } from "framer-motion";

export function Home() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <Navbar />
        </motion.div>
      </AnimatePresence>
      <Hero />
      {/* <div className=" relative mx-auto mt-[5rem]   ">
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
              <li className=" md:text-baselg">
                <motion.p whileHover={{ scale: 1.1 }}>
                  <NavLink to="/usersearch">
                    <BsArrowRightCircle className="inline text-baselg mb-1 mr-2 " />
                    Find out who's tweeting
                  </NavLink>
                </motion.p>
              </li>
            </ul>
          </motion.div>
          <img
            className="pt-4 px-5 pb-5 md:px-[4rem] md:pb-[4rem]   lg:w-[1200px]"
            src={homeImg}
            alt="friends laughing"
          />
        </div>
      </div> */}
    </>
  );
}
