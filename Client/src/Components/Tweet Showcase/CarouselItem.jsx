import React from "react";

import templatePic from "../User Search Page/Imgs/youtubepic.jpg";
{/* <CarouselItem  videoId={data.id.videoId} title={data.snippet.title} channelName={channelName}/> */}
export const CarouselItem = ({videoId, title, channelName}) => {
  return (
    <>
      <div className="   rounded  mx-3  ">
        <div className="flex justify-center">
          <div className="my-5 text-center w-[350px]">
          <iframe
            className="w-[100%] h-[300px]"
            src={`https:/www.youtube.com/embed/${videoId}`}
            allowFullScreen
          ></iframe>
          
            <div className="py-3">
              <h1>{title}</h1>
              {/* <h5 className="text-gray-400 text-sm">{channelName}</h5> */}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
