import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home Page/Home";
import { TweetShowcase } from "./Components/TweetShowcase";
import { UserSearch } from "./Components/User Search Page/UserSearch";
import { HamburgerLinks } from "./Components/HamburgerLinks";
import { MobileFooter } from "./Components/MobileFooter";

function App() {
  return (
    <div>
      {/* React Query - Zustand */}
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
