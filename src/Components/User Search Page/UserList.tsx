import React, {FC} from "react";
import {Users} from './Users';



export const UserList = ({ userData }: {userData: any}) => {
  return (
    <>
      {userData.map((userData: string) => (
        <Users key={userData} name={userData} />
      ))}
    </>
  );
}
