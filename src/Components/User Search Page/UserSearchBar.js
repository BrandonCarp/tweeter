import { useState } from "react";
import {BiSearch} from  "react-icons/bi"

export function UserSearchBar() {

  const [searchInput, setSearchInput] = useState("");
  const [searchUser, setSearchUser] = useState("");


const handleSubmit = (e) => {
  e.preventDefault();
setSearchUser(searchInput);


  setSearchInput("");
}


  
  return (
    <>
      <form onSubmit={handleSubmit} className="mt-1">
        <div className="p-2 border-2 border-gray-300 rounded-full flex">
        <button  className="ml-2" type="submit"><BiSearch  className="text-[1.5rem] text-gray-500" /></button>
        <input
          type="search"
          className=" bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none  "
          placeholder="Search Users" value={searchInput} onChange={event => setSearchInput(event.target.value)}
        />
     
        
        </div>

        
      </form>
    </>
  );
}
