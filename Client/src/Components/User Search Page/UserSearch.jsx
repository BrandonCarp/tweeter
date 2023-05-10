import React, { useState } from "react";
import { UserSearchBar } from "./UserSearchBar";
import { UserList } from "./UserList";
import { ScrollButton } from "../ScrollButton";
import axios from "axios";
import { Footer } from "../Footer";
import { MobileFooter } from "../MobileFooter";
import { SampleUsers } from "./SampleUsers";


export function UserSearch() {
  const [apiState, setApiState] = useState([]);

 

  const fetchData = async (query) => {
    const res = await axios.get(
      `https://dailyvid-service.onrender.com/data/search/?q=${query}`
    );

    setApiState(res.data.items);
  
  };

 

  return (
    <>
      <div className="relative mx-auto container   flex-col ">
       
        <div className="h-[70vh]  mb-20 md:mb-0">
          <div className=" flex  justify-center">
          <h1 className=" flex justify-center text-l mt-10  border-b-2 ">Video Search</h1>
          </div>
       
      
            <UserSearchBar fetchData={fetchData} />
      {apiState.length > 1 ? <UserList userData={apiState} /> : null }

    
            <ScrollButton />
          </div>
        
          <Footer />
        </div>
      <MobileFooter />
    </>
  );
}
