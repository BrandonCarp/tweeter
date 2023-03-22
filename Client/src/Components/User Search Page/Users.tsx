import React from "react";
import templatePic from "./Imgs/youtubepic.jpg";
import { UserInfo } from "../interfaces";

import "../Styles/darkMode.css";

{
  /* <Users
// @ts-ignore
key={userData.etag}
// @ts-ignore
videoId={userData.videoId}
// @ts-ignore
videoTitle={userData.snippet.title}
// @ts-ignore
channelTitle={userData.snippet.channelTitle}
// @ts-ignore
videoPic={userData.snippet.thumbnails.high.url}
// @ts-ignore
publishTime={userData.snippet.publishTime}
/> */
}

export const Users: React.FC<UserInfo> = ({
  // @ts-ignore
  videoId,
  // @ts-ignore
  videoTitle,
  // @ts-ignore
  channelTitle,
  // @ts-ignore
  videoPic,
  // @ts-ignore
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
