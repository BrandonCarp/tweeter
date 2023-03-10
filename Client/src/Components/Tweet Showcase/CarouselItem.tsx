import React from "react";

import templatePic from "../User Search Page/Imgs/youtubepic.jpg";

export const CarouselItem = () => {
  return (
    <>
      <div className="   rounded  mx-3  ">
        <div className="flex justify-center">
          <div className="my-5 text-center w-[350px]">
            <img src={templatePic} className="rounded" />
            <div className="py-3">
              <h1>Title of video goes here</h1>
              <h5 className="text-gray-400 text-sm">LVNDMARK</h5>
              <h5 className="text-gray-400 text-sm">55k views * 1 day ago</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
