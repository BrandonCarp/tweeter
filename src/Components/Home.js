import homeImg from "./Imgs/homePage.jpg";
import { NavLink } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import { About } from "./About";

export function Home() {
  return (
    <>
      <div className=" relative mx-auto   ">
        <div className="flex flex-col items-center  justify-center space-y-5">
          <h1 className="text-[1.2rem]  md:text-xl">
            Connecting people online everyday
          </h1>
          <ul>
            <li className="hover:animate-bounce md:text-baselg">
              <NavLink to="/usersearch">
                <BsArrowRightCircle className="inline text-baselg mb-1 mr-2 " />
                Find out who's tweeting
              </NavLink>
            </li>
          </ul>
          <img
            className="pt-4 px-5 pb-5 md:px-[4rem] md:pb-[4rem]  lg:w-[1200px] lg:pb-[7rem]"
            src={homeImg}
            alt="friends laughing"
          />
        </div>
      </div>
    </>
  );
}
