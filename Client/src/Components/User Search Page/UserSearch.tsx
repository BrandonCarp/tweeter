import React, { useState } from "react";
import { UserSearchBar } from "./UserSearchBar";
import { UserList } from "./UserList";
import { ScrollButton } from "../ScrollButton";
import axios from "axios";
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

  const fetchData = async (query: String) => {
    const res = await axios.get(`http://localhost:8000/data/?q=${query}`);

    setApiState(res.data.items);
    console.log(apiState);
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
                console.log(apiState[0]);
              }}
            >
              Test
            </button>
            <UserList userData={apiState} />
            <button className=""> More</button>
            <ScrollButton />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
