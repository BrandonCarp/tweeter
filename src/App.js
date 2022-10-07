import {   Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { TweetShowcase } from "./Components/TweetShowcase";
import { UserSearch } from "./Components/UserSearch";
import {HamburgerLinks} from "./Components/HamburgerLinks";

function App() {
  return (
    <>
      <Navbar />

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usersearch" element={<UserSearch />} />
        <Route path="/showcase" element={<TweetShowcase />} />
        <Route path="/hamburgerlink" element={<HamburgerLinks />} />
      </Routes>

      
    </>
  );
}

export default App;
