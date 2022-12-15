import React, {FC} from "react";



export const UserList = ({ userData }) => {
  return (
    <>
      {userData.map((userData: string) => (
        <Users key={userData} name={userData} />
      ))}
    </>
  );
}
