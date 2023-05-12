import React from "react";
import ReactPlayer from "react-player";


import "../Styles/darkMode.css";

export const SuggestedVideo = () => {
  return (
    <div className="flex-col ">
 
 <h1 className="flex justify-center text-gray-400">Suggested Video</h1>
      <div className="flex justify-center md:px-3">
        
        <div className="my-5 text-center w-[100%] md:w-[75%] lg:w-[50%]">
      
                    <ReactPlayer width={`100%`} controls={true}   url={`https://www.youtube.com/watch?v=LMTGQqUUyzk&t`} />

          <div className="py-3">
            <a href={`https://www.youtube.com/watch?v=LMTGQqUUyzk`}>
              1 Hour Studio Ghibli Lofi Hip Hop Mix
            </a>
            <h5 className="text-gray-400 text-sm">Dizzy Inc</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
