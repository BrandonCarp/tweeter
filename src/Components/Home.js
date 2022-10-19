import { Navbar } from "./Navbar";
import { About } from "./About";
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
      <About />
    </>
  );
}
