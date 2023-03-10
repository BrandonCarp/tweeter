import React from "react";
import { UserSearchBar } from "./UserSearchBar";
import { UserList } from "./UserList";
import { ScrollButton } from "../ScrollButton";

export function UserSearch() {
  const userData: string[] = [
    "Dio",
    "Morty",
    "rick",
    "rick flair",
    "Jojo",
    "Yuta",
    "Michael Jackson",
  ];

  return (
    <>
      <div className="relative mx-auto  container " id="topApp">
        <div className="">
          <div>
            <UserSearchBar />
            <UserList userData={userData} />
            <ScrollButton />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
