import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import "../Styles/darkMode.css";
import { Carousel } from "./Carousel";


export const FavoriteUsers = ({channelName, thumbnail, videoData, delBtn}) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div id={theme} className="flex flex-col items-center justify-center ">
{/*         
        <img
          src={`${thumbnail}`}
          alt="user "
          className="h-[10rem] md:h-[15rem] rounded"
        /> */}
        
        <h2 className="font-bold mt-3 text-xl">{channelName}</h2>
        <button id={theme} className="border-2 rounded py-1 px-3 mt-3"  onClick={e => delBtn(channelName)}>Delete Btn</button>
      </div>
      <div>
        <Carousel videoData={videoData} channelName={channelName}/>
      </div>
    </>
  );
};
