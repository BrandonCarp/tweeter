import { useState, useMemo } from "react";
import {BiSearch} from  "react-icons/bi"

export function UserSearchBar() {

  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

const filteredUsers = useMemo(() => {
 return users.filter(user => {
 return  user.toLowerCase().includes(query.toLowerCase())
})}, []);

const handleSubmit = (e) => {
  e.preventDefault();
setQuery(users);


  setQuery("");
}


  
  return (
    <div className=" px-10 pt-1 pb-10 pt-5  w-screen md:w-[100%] ">
      <form onSubmit={handleSubmit} className=" items-center ">
        <div className="p-5 md:p-3  border-2 border-gray-300 rounded-full flex ">
        <button  className="ml-2" type="submit"><BiSearch  className="text-[1.5rem] text-gray-500" /></button>
        <input
          type="search"
          className=" bg-white pl-3 pr-16 rounded-lg  focus:outline-none  "
          placeholder="Search Users" value={query} onChange={e => setQuery(e.target.value)}
        />
        </div>

        <h1>{filteredUsers}</h1>
      </form>
    </div>
  );
}
