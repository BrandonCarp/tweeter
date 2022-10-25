import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { MdPersonSearch } from "react-icons/md";

export function MobileFooter() {
  return (
    <>
      <div className=" mt-20  space-y-3 flex flex-col items-center md:items-start md:ml-[20%]  md:h-20">
        <div className="flex flex-col  ">
          <h1 className="text-baselg">Tweeter</h1>
          <ul className="flex space-x-5 text-sm">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/usersearch">Search Users</NavLink>
            <NavLink to="/showcase">Showcase</NavLink>
          </ul>
        </div>
        <div className="border-b-2 border-black-800 w-[80%]"></div>

        <div className="flex items-center justify-center p-5">
          <h1 className="font-light mb-5">
            © 2022 Tweeter™. All Rights Reserved.
          </h1>
        </div>
      </div>

      <div className="">
        <ul className=" bottom-0 h-20 flex justify-center items-center border-t-[3px] md:invisible ">
          <li className="hover:bg-gray-300 hover:rounded-full   p-2">
            <NavLink to="/">
              <AiFillHome className="text-md " />
            </NavLink>
          </li>
          <li className="hover:bg-gray-300 hover:rounded-full  p-2">
            <NavLink to="/usersearch">
              <MdPersonSearch className="text-md " />
            </NavLink>
          </li>
          <li className="hover:bg-gray-300 hover:rounded-full  p-2">
            <NavLink to="/showcase">
              <BiHash className="text-md " />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
