import React from "react";
import { CarouselItem } from "./CarouselItem";

export const Carousel = ({videoData, channelName}) => {
  return (
    <>
      <div className="carousel p-4 flex items-center justify-start space-x-5 overflow-x-auto">
        {videoData.map((data) => {
          <CarouselItem  videoId={data.id.videoId} title={data.snippet.title} channelName={channelName}/>
        })}
      </div>
    </>
  );
};
