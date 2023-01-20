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
import { setSyntheticLeadingComments } from "typescript";

type ThemeName = 'light' | 'dark' | string;

export const ThemeContext = createContext<any>('');




export const App = () => {

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }
  
const [theme, setTheme]= useState<ThemeName>('light');


  return  (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
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
    </ThemeContext.Provider>
  );
};
