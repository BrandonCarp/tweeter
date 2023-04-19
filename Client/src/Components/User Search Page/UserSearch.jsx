import React, { useState } from "react";
import { UserSearchBar } from "./UserSearchBar";
import { UserList } from "./UserList";
import { ScrollButton } from "../ScrollButton";
import axios from "axios";
import { UserListProps } from "../Types/ThemeName";
// import { useQuery } from "@tanstack/react-query";

// create a search more at bottom and add that
// as the function to react query
// set up similar functionality as my users page in showcase tab
// set up loading gif functionality
// fix footer
// done ?
export function UserSearch() {
  const [apiState, setApiState] = useState([]);

  // const {isLoading, data: dailyVids} = useQuery(
  //   [`fetchData`,]
  // )

  const fetchData = async (query) => {
    const res = await axios.get(
      `http://localhost:8000/data/search/?q=${query}`
    );

    setApiState(res.data.items);
    console.log(res.data);
  };

  // const fetchMore = async() => {
  //    const res = await axios.get(`http://localhost:8000/data/?q=${apiState}`);

  // }
  // Work on footer

  return (
    <>
      <div className="relative mx-auto container   flex-col justify-start">
        <div className="">
          <div className="">
            <UserSearchBar fetchData={fetchData} />
            <button
              onClick={(e) => {
                console.log(apiState);
              }}
            >
              Test
            </button>
            <UserList userData={apiState} />
            <div className="flex items-center justify-center">
              <button className="">More</button>
            </div>

            <ScrollButton />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
