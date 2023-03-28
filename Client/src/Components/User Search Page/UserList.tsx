import React from "react";
import { Users } from "./Users";

type videoTypes = {
  key: string;
  videoId: string;
  videoTitle: string;
  channelTitle: string;
  publishTime: string;
};

export const UserList = ({ userData }: any) => {
  return (
    // @ts-ignore
    <div className="">
      <div className="flex flex-wrap justify-center ">
        {userData.map((userData: any) => (
          <Users
            key={userData.etag}
            // @ts-ignore
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
