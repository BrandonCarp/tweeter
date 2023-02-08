import React from "react";
import picture from "../User Search Page/Imgs/me and ko.jpg";
import bingChilling from "../User Search Page/Imgs/john cena.jpg";
import { BsChat } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";

export const CarouselItem = () => {
  return (
    <>
      <div className="relative mx-auto container  rounded  userBorder  p-5  ">
        <div className="flex items-center w-[100%]">
          <img
            src={bingChilling}
            alt="tweeters profile"
            className="h-8 mr-2 rounded-full"
          />

          <a
            href="https://twitter.com/elonmusk"
            className="text-secondaryGray text-mdsm p-[1px] "
          >
            johnloves@bingChilling
          </a>
        </div>

        <p className="p-3">
          早上好中国 现在我有冰激淋 我很喜欢冰激淋 但是《速度与激情9》比冰激淋
        </p>

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
    </>
  );
};
