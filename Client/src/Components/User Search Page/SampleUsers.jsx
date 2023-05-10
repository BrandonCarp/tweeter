import React from "react";


import "../Styles/darkMode.css";

export const SampleUsers = () => {
  return (
    <div className="flex-col pb-20">
 
 <h1 className="flex justify-center text-gray-400">Suggested Video</h1>
      <div className="flex justify-center md:px-3">
        
        <div className="my-5 text-center w-screen  md:w-[350px]">
          <iframe
            className="w-[100%] h-[300px]"
            src={`https:/www.youtube.com/embed/LMTGQqUUyzk&t`}
            allowFullScreen
          ></iframe>

          <div className="py-3">
            <a href={`https://www.youtube.com/watch?v=LMTGQqUUyzk`}>
              1 Hour Studio Ghibli Lofi Hip Hop Mix
            </a>
            <h5 className="text-gray-400 text-sm">Dizzy Inc</h5>
            <h5 className="text-gray-400 text-sm">3 years ago</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
