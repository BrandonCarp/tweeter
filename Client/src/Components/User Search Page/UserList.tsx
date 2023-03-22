import React from "react";
import { Users } from "./Users";
import kohaku from "./Imgs/me and ko.jpg";

type UserListProps = {
  userData: string[];
};

export const UserList = ({ userData }: UserListProps) => {
  return (
    <div className="">
      <div className="flex flex-wrap justify-center ">
        {userData.map((userData) => (
          // @ts-ignore
          <Users
            // @ts-ignore
            key={userData.etag}
            // @ts-ignore
            videoId={userData.id.videoId}
            // @ts-ignore
            videoTitle={userData.snippet.title}
            // @ts-ignore
            channelTitle={userData.snippet.channelTitle}
            // @ts-ignore
            publishTime={userData.snippet.publishTime}
          />
        ))}
      </div>
    </div>
  );
};
