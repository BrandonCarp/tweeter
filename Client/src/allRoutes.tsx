import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home Page/Home";
import { UserSearch } from "./Components/User Search Page/UserSearch";
import { TweetShowcase } from "./Components/Tweet Showcase/TweetShowcase";
import { HamburgerLinks } from "./Components/HamburgerLinks";

export function allRoutes() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home />} />
<Route path="/usersearch" element={<UserSearch />} />
<Route path="/showcase" element={<TweetShowcase />} />
<Route path="/hamburgerlink" element={<HamburgerLinks />} />
</Routes>
    </div>
  )
}