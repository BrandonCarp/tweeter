import React from "react";
import ReactPlayer from "react-player";
import { DateSort } from "./DateSort";
import "../Styles/darkMode.css";

export const Users = ({
 
  videoId,

  videoTitle,

  channelTitle,
  

  publishTime,
}) => {
  return (
    <div className="">
      <div className="flex justify-center md:px-3">
        <div className="my-5 text-center w-screen  md:w-[350px]">
        
       
          <ReactPlayer width={``} controls={true}  url={`https://www.youtube.com/watch?v=${videoId}`} />

          <div className="py-3">
            <a href={`https://www.youtube.com/watch?v=${videoId}`}>
              {videoTitle}
            </a>
            <h5 className="text-gray-400 text-sm">{channelTitle}</h5>
            <DateSort publishTime={publishTime}/>

        </div>
      </div>
      </div>
    </div>
  );
};
