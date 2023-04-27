// import React, { useContext } from "react";
// import { ThemeContext } from "../Context/ThemeContext";
import React from "react";
import "../Styles/darkMode.css";
import { Carousel } from "./Carousel";


export const FavoriteUsers = ({channelName, thumbnail, videoData, delBtn}) => {
  // const theme = useContext(ThemeContext);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        
        <img
          src={`${thumbnail}`}
          alt="user "
          className="h-[10rem] md:h-[15rem] rounded"
        />
        <button  onClick={e => delBtn(channelName)}>Delete Btn</button>
        <h2 className="font-bold mt-3">{channelName}</h2>
       
      </div>
      <div>
        <Carousel videoData={videoData} channelName={channelName}/>
      </div>
    </>
  );
};
