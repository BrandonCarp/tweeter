import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Components/Home";
import { TweetShowcase } from "./Components/TweetShowcase";
import { UserSearch } from "./Components/UserSearch";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/usersearch">Search Users</NavLink>
          </li>
          <li>
            <NavLink to="/showcase">Showcase</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usersearch" element={<UserSearch />} />
        <Route path="/showcase" element={<TweetShowcase />} />
      </Routes>
    </>
  );
}

export default App;
