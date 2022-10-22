import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { TweetShowcase } from "./Components/TweetShowcase";
import { UserSearch } from "./Components/UserSearch";
import { HamburgerLinks } from "./Components/HamburgerLinks";
import { MobileFooter } from "./Components/MobileFooter";
import { GiClassicalKnowledge } from "react-icons/gi";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usersearch" element={<UserSearch />} />
        <Route path="/showcase" element={<TweetShowcase />} />
        <Route path="/hamburgerlink" element={<HamburgerLinks />} />
      </Routes>
      <MobileFooter />
    </div>
  );
}

export default App;
