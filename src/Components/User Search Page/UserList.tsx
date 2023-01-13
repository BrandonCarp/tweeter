import React from "react";
import {Users} from './Users';
import kohaku from "./Imgs/me and ko.jpg";

type UserListProps = {
  userData: string[];
}

export const UserList = ({userData}: UserListProps) => {
  return (
    <>
      {userData.map((userData) => (
        <Users key={userData} name={userData} picture={kohaku}/>
      ))}
    </>
  );
}
