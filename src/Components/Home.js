import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { MobileFooter } from "./MobileFooter";

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
      <MobileFooter />
    </>
  );
}
