import React from "react";


import "../Styles/darkMode.css";

export const Users = ({
 
  videoId,

  videoTitle,

  channelTitle,
  
  videoPic,

  publishTime,
}) => {
  return (
    <div className="">
      <div className="flex justify-center md:px-3">
        <div className="my-5 text-center w-screen  md:w-[350px]">
          <iframe
            className="w-[100%] h-[300px]"
            src={`https:/www.youtube.com/embed/${videoId}`}
            allowFullScreen
          ></iframe>

          <div className="py-3">
            <a href={`https://www.youtube.com/watch?v=${videoId}`}>
              {videoTitle}
            </a>
            <h5 className="text-gray-400 text-sm">{channelTitle}</h5>
            <h5 className="text-gray-400 text-sm">{publishTime}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
