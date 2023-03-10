import React from "react";
import templatePic from "./Imgs/youtubepic.jpg";
import { UserInfo } from "../interfaces";

import "../Styles/darkMode.css";

export const Users: React.FC<UserInfo> = ({ name, picture }) => {
  return (
    <div className="">
      <div className="flex justify-center md:px-3">
        <div className="my-5 text-center w-screen  md:w-[350px]">
          <iframe
            className="w-[100%] h-[300px]"
            width=""
            height=""
            src="https://www.youtube.com/embed/bHFKkCcUjW0"
            allowFullScreen
          ></iframe>
          <div className="py-3">
            <a href="https://www.youtube.com/">Title of Video goes here</a>
            <h5 className="text-gray-400 text-sm">LVNDMARK</h5>
            <h5 className="text-gray-400 text-sm">55k views 1 day ago</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
