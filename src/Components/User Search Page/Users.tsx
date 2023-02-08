import React from "react";

import { BsChat } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { UserInfo } from "../interfaces";

import "../Styles/darkMode.css";

export const Users: React.FC<UserInfo> = ({ name, picture }) => {
  return (
    <div className=" relative mx-auto container   rounded  userBorder   ">
      <div className="flex   p-5">
        {/* <a href="https://twitter.com/elonmusk" className=" mr-5">
        <img
          src={picture}
          alt="User Photo"
          className="h-[50px] w-[175px] rounded-full "
        />
        </a> */}
        <img
          src={picture}
          alt="tweeters profile"
          className="h-12 mr-2 rounded-full"
        />

        <div className="flex flex-col ">
          <div>
            <div className="flex text-mdsm ">
              {name}{" "}
              <a
                href="https://twitter.com/elonmusk"
                className="text-secondaryGray pl-[5px]"
              >
                @{name}TweeterDevIO
              </a>
            </div>
            <div className="py-4  ">
              <p>
                早上好中国 现在我有冰激淋 我很喜欢冰激淋
                但是《速度与激情9》比冰激淋
              </p>
            </div>
          </div>

          <ul className="flex items-center  space-x-5 text-secondaryGray">
            <li className="flex items-center">
              <BsChat className="mr-2 " /> 1337
            </li>
            <li className="flex items-center ">
              <FaRetweet className="mr-2 " /> 420
            </li>
            <li className="flex items-center ">
              <BiHeart className="mr-2 " /> 69
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
