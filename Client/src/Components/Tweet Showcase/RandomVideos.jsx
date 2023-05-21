import React from 'react';
import ReactPlayer from "react-player";
import { DateSort } from '../User Search Page/DateSort';

export const RandomVideos = ({video}) => {
  return (
    <div className="">
      <div className="flex justify-center md:px-3">
        <div className="my-5 text-center w-screen  md:w-[350px]">
        
       
          <ReactPlayer width={``} controls={true}  url={`https://www.youtube.com/watch?v=${video.id.videoId}`} />

          <div className="py-3">
            <a className='text-center' href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
              {video.snippet.description}
            </a>
            <h5 className="text-gray-400 text-base">{video.snippet.channelTitle}</h5>
            <DateSort publishTime={video.snippet.publishTime}/>

        </div>
      </div>
      </div>
    </div>
  );
};
