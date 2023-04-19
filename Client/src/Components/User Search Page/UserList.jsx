import React from "react";
import { Users } from "./Users";



export const UserList = ({ userData }) => {
  return (
    <div className="">
      <div className="flex flex-wrap justify-center ">
        {userData.map((userData) => (
          <Users
            key={userData.etag}
            videoId={userData.id.videoId}
            videoTitle={userData.snippet.title}
            channelTitle={userData.snippet.channelTitle}
            publishTime={userData.snippet.publishTime}
          />
        ))}
      </div>
    </div>
  );
};
