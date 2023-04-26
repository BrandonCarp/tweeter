import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import "../Styles/darkMode.css";
import { Carousel } from "./Carousel";

{/* <FavoriteUsers channelName={data.userName} thumbnail={data.thumbnail} videoData={data.data}/> */}
export const FavoriteUsers = ({channelName, thumbnail, videoData}) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img
          src={`${thumbnail}`}
          alt="user photo"
          className="h-[10rem] md:h-[15rem] rounded"
        />

        <h2 className="font-bold mt-3">{channelName}</h2>
        {/* <h3 className="text-sm text-secondaryGray mb-2">
          johnloves@bingChilling
        </h3> */}
      </div>
      <div>
        <Carousel videoData={videoData.items} channelName={channelName}/>
      </div>
    </>
  );
};
