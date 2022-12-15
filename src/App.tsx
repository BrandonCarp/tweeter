import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home Page/Home";
import { TweetShowcase } from "./Components/TweetShowcase";
import { Navbar } from "./Components/Home Page/Navbar";
import { UserSearch } from "./Components/User Search Page/UserSearch";
import { HamburgerLinks } from "./Components/HamburgerLinks";
import { MobileFooter } from "./Components/MobileFooter";
import { AnimatePresence, motion } from "framer-motion";

export const App = () => {


  return (
    <div>
      <AnimatePresence>
        <motion.div
          className="sticky top-0 z-50 bg-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <Navbar />
        </motion.div>
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usersearch" element={<UserSearch />} />
        <Route path="/showcase" element={<TweetShowcase />} />
        <Route path="/hamburgerlink" element={<HamburgerLinks />} />
      </Routes>
      <MobileFooter />
    </div>
  );
};
