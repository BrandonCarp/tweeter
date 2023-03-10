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
          <Users key={userData} name={userData} picture={kohaku} />
        ))}
      </div>
    </div>
  );
};
