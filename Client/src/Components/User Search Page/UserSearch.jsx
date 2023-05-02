import React, { useState } from "react";
import { UserSearchBar } from "./UserSearchBar";
import { UserList } from "./UserList";
import { ScrollButton } from "../ScrollButton";
import axios from "axios";
import { Footer } from "../Footer";
import { MobileFooter } from "../MobileFooter";


export function UserSearch() {
  const [apiState, setApiState] = useState([]);

 

  const fetchData = async (query) => {
    const res = await axios.get(
      `http://localhost:80/data/search/?q=${query}`
    );

    setApiState(res.data.items);
  
  };

 

  return (
    <>
      <div className="relative mx-auto container   flex-col mt-5 ">
        <div className="h-[70vh]  ">
          <div className=" flex  justify-center">
          <h1 className=" flex justify-center text-l mt-10  border-b-2 ">Video Search</h1>
          </div>
       
      
            <UserSearchBar fetchData={fetchData} />

            <UserList userData={apiState} /> 
    
            <ScrollButton />
          </div>
         
          <Footer />
        </div>
      <MobileFooter />
    </>
  );
}
