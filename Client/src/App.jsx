import React, { useState} from "react";
import { Route, Routes } from "react-router-dom";
import "./Components/Styles/darkMode.css";
import { Home } from "./Components/Home Page/Home";
import { VideoShowcase } from "./Components/Tweet Showcase/VideoShowcase";
import { Navbar } from "./Components/Home Page/Navbar";
import { UserSearch } from "./Components/User Search Page/UserSearch";
import { HamburgerLinks } from "./Components/HamburgerLinks";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollToTop } from "./Components/ScrollToTop";
import { ThemeContext } from "./Components/Context/ThemeContext";


export const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };


  return (
    <div id={theme} className="h-[100vh]  ">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme} className="">
          <ScrollToTop />
          <AnimatePresence>
            <motion.div
              className="sticky top-0 z-50"
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
            <Route path="/showcase" element={<VideoShowcase />} />
            <Route path="/hamburgerlink" element={<HamburgerLinks />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </ThemeContext.Provider>
    </div>
  );
};
