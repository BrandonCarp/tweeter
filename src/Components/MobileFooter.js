import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { MdPersonSearch } from "react-icons/md";

export function MobileFooter() {
  return (
    <div className=" md:mt-[20rem] lg:mt-[15rem]">
      <div className="    w-screen    p-5 mx-auto   md:visible ">
        <div className="">
          <div className="mb-5 border-b-2 border-black-600  mx-[20%]"></div>
          <div className="flex items-center justify-center ">
            <h1 className="font-light mb-5">© Tweeter 2022</h1>
          </div>
        </div>
      </div>

      <div className=" tall:mt-[5rem] p-5 flex items-center justify-center   border-t-[3px] md:invisible">
        <ul className=" flex space-x-10 ">
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
              <ImSearch className="text-md " />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
