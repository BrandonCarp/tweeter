import React from "react";


import { BsChat } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { UserInfo } from "../interfaces";

import "../Styles/darkMode.css"

export const Users: React.FC<UserInfo> = ({ name, picture }) => {
  return (
    <div className=" relative mx-auto  rounded  userBorder mx-1 ">
      <div className="flex container p-5 ">

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
            <div className="flex">
              
             {name} <a href="https://twitter.com/elonmusk" className="text-secondaryGray">@{name}TweeterDevIO</a>
            </div>
            <div className="py-4  ">
              <p>
                第三章 第七章 第五章 第十章. 復讐者」. 復讐者」. .復讐者」
                伯母さん . 第七章 第四章 第三章.復讐者」 伯母さん. 第十二章
                第十一章 第十三章 第十
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
}
