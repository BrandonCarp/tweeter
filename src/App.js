import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { TweetShowcase } from "./Components/TweetShowcase";
import { UserSearch } from "./Components/UserSearch";
import { HamburgerLinks } from "./Components/HamburgerLinks";
import { MobileFooter } from "./Components/MobileFooter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usersearch" element={<UserSearch />} />
        <Route path="/showcase" element={<TweetShowcase />} />
        <Route path="/hamburgerlink" element={<HamburgerLinks />} />
      </Routes>
      <MobileFooter />
    </>
  );
}

export default App;
