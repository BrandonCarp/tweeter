import React, { useState} from "react";
import { Route, Routes } from "react-router-dom";
import './Components/Styles/darkMode.css';
import { Home } from "./Components/Home Page/Home";
import { TweetShowcase } from "./Components/Tweet Showcase/TweetShowcase";
import { Navbar } from "./Components/Home Page/Navbar";
import { UserSearch } from "./Components/User Search Page/UserSearch";
import { HamburgerLinks } from "./Components/HamburgerLinks";
import { Footer } from "./Components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollToTop } from "./Components/ScrollToTop";
import {ThemeContext} from './Components/Context/ThemeContext';
import { ThemeName } from "./Components/Types/ThemeName";
import { MobileFooter } from "./Components/MobileFooter";




export const App = () => {

  const [theme, setTheme]= useState<ThemeName>('dark');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }
  



  return  (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div id={theme} className="">
      <ScrollToTop />
      <AnimatePresence>
        <motion.div 
          className="sticky top-0 z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
         <Navbar  />
       
        </motion.div>
      </AnimatePresence>
      <Routes>
      <Route path="/" element={<Home />} />
<Route path="/usersearch" element={<UserSearch />} />
<Route path="/showcase" element={<TweetShowcase />} />
<Route path="/hamburgerlink" element={<HamburgerLinks />} />
</Routes>
<Footer />
    </div>
    
    </ThemeContext.Provider>
  );
};
