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

    setApiState(res.data.items);
  };

  return (
    <>
      <div className="relative mx-auto  container " id="topApp">
        <div className="">
          <div>
            <UserSearchBar fetchData={fetchData} />
            <button
              onClick={(e) => {
                // @ts-ignore
                console.log(apiState);
              }}
            >
              {" "}
              test
            </button>
            <UserList userData={apiState} />
            <ScrollButton />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
