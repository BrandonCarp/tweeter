import React from "react";
import { useState, useMemo } from "react";
import { BiSearch } from "react-icons/bi";

export function UserSearchBar() {
  const [query, setQuery] = useState("");

  // const filteredUsers = useMemo(() => {
  //   return users.filter((user) => {
  //     return user.toLowerCase().includes(query.toLowerCase());
  //   });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setQuery("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <div className="sticky  mx-auto container ">
      <div className=" px-5 pt-1 pb-10 pt-5   flex flex-col md:items-center  ">
        <form onSubmit={handleSubmit} className=" items-center  md:w-[60%]">
          <div className="p-5 md:p-3  border-2 border-gray-300 rounded-full flex ">
            <button className="ml-2" type="submit">
              <BiSearch className="text-[1.5rem] text-gray-500" />
            </button>
            <input
              type="text"
              className=" bg-white pl-3 pr-16 rounded-lg  focus:outline-none  "
              placeholder="Search Users"
              value={query}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
