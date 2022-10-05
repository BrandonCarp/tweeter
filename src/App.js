import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Components/Home";
import { TweetShowcase } from "./Components/TweetShowcase";
import { UserSearch } from "./Components/UserSearch";

function App() {
  return (
    <>
      <nav >
        <ul className="container relative ml-10 pt-5 space-x-10  flex ">
          <li className="text-baselg">
            {/* Make a icon */}
            <NavLink to="/">Logo Here </NavLink>
          </li>
          <div className="flex space-x-10 pl-10 ">
          <li className="">
            <NavLink to="/usersearch">Search Users</NavLink>
          </li>
          <li>
            <NavLink to="/showcase">Showcase</NavLink>
          </li>
          </div>
          {/* <li className="">
            <NavLink to="/usersearch">Search Users</NavLink>
          </li>
          <li>
            <NavLink to="/showcase">Showcase</NavLink>
          </li> */}
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
