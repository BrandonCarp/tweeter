import React, {createContext, useContext, useState} from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home Page/Home";
import { TweetShowcase } from "./Components/Tweet Showcase/TweetShowcase";
import { Navbar } from "./Components/Home Page/Navbar";
import { UserSearch } from "./Components/User Search Page/UserSearch";
import { HamburgerLinks } from "./Components/HamburgerLinks";
import { MobileFooter } from "./Components/MobileFooter";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollToTop } from "./Components/ScrollToTop";

const ThemeContext = createContext('');

export const App = () => {
  const [theme, setTheme] = useState('light');
 
  return  (
   
    <div className="text-primaryLight bg-primaryPurple dark:text-black dark:bg-white">
      <ScrollToTop />
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
