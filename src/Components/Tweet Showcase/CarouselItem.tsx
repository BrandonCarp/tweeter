import React from "react";
import picture from '../User Search Page/Imgs/me and ko.jpg'
import { BsChat } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { UserInfo } from "../interfaces";

export const CarouselItem = () => {
  return ( <>
  <div className=" relative mx-auto container   rounded  userBorder   ">
      <div className="flex   p-5">
        <img
          src={picture}
          alt="tweeters profile"
          className="h-12 mr-2 rounded-full"
        />
      
       
        <div className="flex flex-col ">
          <div>
            <div className="flex text-mdsm ">
              
              <a href="https://twitter.com/elonmusk" className="text-secondaryGray pl-[5px]">@TweeterDevIO</a>
            </div>
            <div className="py-4  ">
              <p>
                第三章 第七章 第五章 第十章. 復讐者」. 復讐者」. .復讐者」
                伯母さん . 第七章 第四章 
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
  </>)
}