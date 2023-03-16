import React, { useState } from "react";
import { UserSearchBar } from "./UserSearchBar";
import { UserList } from "./UserList";
import { ScrollButton } from "../ScrollButton";
import axios from "axios";

export function UserSearch() {
  const [apiState, setApiState] = useState([]);
  const userData: string[] = [
    "Dio",
    "Morty",
    "rick",
    "rick flair",
    "Jojo",
    "Yuta",
    "Michael Jackson",
  ];

  const fetchData = async (query: String) => {
    const res = await axios.get(`http://localhost:8000/data/?q=${query}`);
    console.log(res.data.items);
    setApiState(res.data.characters);
  };

  return (
    <>
      <div className="relative mx-auto  container " id="topApp">
        <div className="">
          <div>
            <UserSearchBar fetchData={fetchData} />
            <UserList userData={userData} />
            <ScrollButton />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
