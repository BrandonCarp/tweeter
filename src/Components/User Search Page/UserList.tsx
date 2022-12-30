import React from "react";
import {Users} from './Users';



export const UserList = ({userData} : {userData: string[]}) => {
  return (
    <>
      {userData.map((userData: string) => (
        <Users key={userData} name={userData} />
      ))}
    </>
  );
}
