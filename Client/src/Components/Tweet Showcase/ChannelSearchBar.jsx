import React, { useState, useContext } from "react";
import { BiSearch } from "react-icons/bi";
import "../Styles/darkMode.css";
import { ThemeContext } from "../Context/ThemeContext";
import axios from "axios";

export function ChannelSearchBar({ fetchVideo }) {

  const { theme } = useContext(ThemeContext);

  const randomApi = `https://random-word-api.vercel.app/api?words=1
  `;


  const fetchRandom = async () => {
    const data = await axios.get(randomApi);

    fetchVideo(data.data);
  }



  return (
    <div id={theme} className="sticky  mx-auto container  mt-5 ">
      <div className=" px-5 pt-1 pb-10  pt-5    flex flex-col items-center ">
          <button className="  random  font-semibold py-2 px-4 rounded-full" onClick={fetchRandom}>Fetch Video</button>
        
      </div>
    </div>
  );
}
