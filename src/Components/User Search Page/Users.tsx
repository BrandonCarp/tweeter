import React from "react";


import { BsChat } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { UserInfo } from "./interfaces";

export const Users: React.FC<UserInfo> = ({ name, picture }) => {
  return (
    <div className=" relative mx-auto container border w-[85%] mb-5 ">
      <div className="flex container p-8 ">
        <img
          src={picture}
          alt="User Photo"
          className="h-16 mr-5  rounded-full"
        />
        <div className="flex flex-col ">
          <div>
            <div className="flex">
              {name}
              <p className="">@{name}TweeterDevIO</p>
            </div>
            <div className="py-4 ">
              <p>
                第三章 第七章 第五章 第十章. 復讐者」. 復讐者」. .復讐者」
                伯母さん . 第七章 第四章 第三章.復讐者」 伯母さん. 第十二章
                第十一章 第十三章 第十
              </p>
            </div>
          </div>

          <ul className="flex items-center  space-x-5 ">
            <li className="flex items-center">
              <BsChat className="mr-2" /> 1337
            </li>
            <li className="flex items-center">
              <FaRetweet className="mr-2" /> 420
            </li>
            <li className="flex items-center">
              <BiHeart className="mr-2" /> 69
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
