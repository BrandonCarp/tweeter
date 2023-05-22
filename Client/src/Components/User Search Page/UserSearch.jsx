import React, { useState } from "react";
import { UserSearchBar } from "./UserSearchBar";
import { UserList } from "./UserList";
import { ScrollButton } from "../ScrollButton";
import axios from "axios";
import { Footer } from "../Footer";
import { MobileFooter } from "../MobileFooter";
import { SuggestedVideo } from "./SuggestedVideo";



export function UserSearch() {
  const [apiState, setApiState] = useState([]);

 

  const fetchData = async (query) => {
    const res = await axios.get(
      `https://dailyvid-service.onrender.com/data/search/?q=${query}`
    );
    // const res = await axios.get(
    //   `http://localhost:8585/data/search/?q=${query}`
    // );
    setApiState(res.data.items);
  };

 

  return (
    <>
      <div className="relative mx-auto container flex-col ">
       
        <div className=" h-[50vh] lg:h-[70vh] ">
          <div className=" flex  justify-center">
          <h1 className=" flex justify-center text-l mt-10  border-b-2 ">Video Search</h1>
          </div>
          
      
            <UserSearchBar fetchData={fetchData} />

      {apiState.length > 1 ? <UserList userData={apiState} /> :  <SuggestedVideo /> }
            <ScrollButton />
          </div>
          <Footer />
        </div>
      <MobileFooter />
    </>
  );
}
