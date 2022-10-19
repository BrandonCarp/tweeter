import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { MdPersonSearch } from "react-icons/md";

export function MobileFooter() {
  return (
    <>
      <div className="absolute bottom-0 w-screen p-5 mx-auto border-t-[3px]   md:invisible">
        <div className="flex justify-center items-center">
          <ul className="flex space-x-10">
            <li className="hover:bg-gray-300 hover:rounded-full   p-2">
              <NavLink to="/">
                <AiFillHome className="text-md " />
              </NavLink>
            </li>
            <li className="hover:bg-gray-300 hover:rounded-full  p-2">
              <NavLink to="/usersearch">
                <MdPersonSearch className="text-md" />
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
      <div className="invisible bottom-0 mb-5 md:visible mt-[5rem] lg:mt-0">
        <div className="">
          <div className="mb-10 border-b-2 border-black-600 mx-[20%]"></div>
          <div className="flex items-center justify-center ">
            <h1 className="font-light">© Tweeter 2022</h1>
          </div>
        </div>
      </div>
    </>
  );
}
