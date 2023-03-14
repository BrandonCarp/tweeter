import React, { useState, useContext } from "react";
import { BiSearch } from "react-icons/bi";
import "../Styles/darkMode.css";
import { ThemeContext } from "../Context/ThemeContext";
import axios from "axios";

export function UserSearchBar() {
  const [query, setQuery] = useState("");

  const { theme } = useContext(ThemeContext);
  const [apiState, setApiState] = useState({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData(query);
  };

  const fetchData = async (query: any) => {
    const res = await axios.get(`http://localhost:8000/data/?q=${query}`);
    console.log(res.data);
    setApiState(res.data.characters);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    console.log();
  };

  return (
    <div id={theme} className="sticky  mx-auto container mt-5 ">
      <div className=" px-5 pt-1 pb-10 pt-5    flex flex-col md:items-center ">
        <form
          onSubmit={handleSubmit}
          className=" items-center  md:w-[55%] lg:w-[40%]"
        >
          <div className="p-2  md:p-3  border-2 border-secondaryGray rounded-full  rounded-full flex ">
            <button className="ml-2" type="submit">
              <BiSearch className="text-[1.5rem] text-gray-500" />
            </button>
            <input
              id={theme}
              type="text"
              className=" pl-3  rounded-lg  focus:outline-none  "
              placeholder="Search Videos"
              value={query}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
