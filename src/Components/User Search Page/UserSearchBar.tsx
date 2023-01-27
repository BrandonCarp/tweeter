import React, {useContext} from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import "../Styles/darkMode.css";
import { ThemeContext } from "../Context/ThemeContext";

export function UserSearchBar() {
  const [query, setQuery] = useState("");

  const {theme} = useContext(ThemeContext);



  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setQuery("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>  {
    setQuery(event.target.value)
  }

  return (
    <div id={theme} className="sticky  mx-auto container ">
      <div className=" px-5 pt-1 pb-10 pt-5    flex flex-col md:items-center ">
        <form onSubmit={handleSubmit} className=" items-center  md:w-[55%] lg:w-[40%]">
          <div className="p-5 md:p-3  border-2 border-secondaryGray rounded-full  rounded-full flex ">
            <button className="ml-2" type="submit">
              <BiSearch className="text-[1.5rem] text-gray-500" />
            </button>
            <input id={theme}
              type="text"
              className=" pl-3 pr-16 rounded-lg  focus:outline-none  "
              placeholder="Search Users"
              value={query}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
