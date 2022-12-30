import React from "react";
import {Users} from './Users';
import kohaku from "./Imgs/me and ko.jpg";



export const UserList = ({userData}: {userData: string[]}) => {
  return (
    <>
      {userData.map((userData: string) => (
        <Users key={userData} name={userData} picture={kohaku}/>
      ))}
    </>
  );
}
