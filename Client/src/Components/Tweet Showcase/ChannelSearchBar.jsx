import React, { useState, useContext } from "react";
import { BiSearch } from "react-icons/bi";
import "../Styles/darkMode.css";
import { ThemeContext } from "../Context/ThemeContext";
import axios from "axios";

export function ChannelSearchBar({ fetchChannels }) {
  const [query, setQuery] = useState("");
  const { theme } = useContext(ThemeContext);

  const randomApi = `https://random-word-api.vercel.app/api?words=1
  `;
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetchChannels(query);

  //   setQuery("");
  // };

  const fetchRandom = async () => {
    const data = await axios.get(randomApi);

    fetchChannels(data.data);
  }

  // const handleChange = (event) => {
  //   setQuery(event.target.value);
  // };

  return (
    <div id={theme} className="sticky  mx-auto container  mt-5 ">
      <div className=" px-5 pt-1 pb-10  pt-5    flex flex-col md:items-center ">
       
          {/* <div className="p-2  md:p-3  border-2 border-secondaryGray rounded-full  rounded-full flex ">
            <button className="ml-2" type="submit">
              <BiSearch className="text-[1.5rem] text-gray-500" />
            </button>
            <input
              id={theme}
              type="text"
              className=" pl-3  rounded-lg  focus:outline-none  "
              placeholder="Search Channels"
              value={query}
              onChange={handleChange}
            />
          </div> */}
          <button onClick={fetchRandom}>Click Here</button>
        
      </div>
    </div>
  );
}
