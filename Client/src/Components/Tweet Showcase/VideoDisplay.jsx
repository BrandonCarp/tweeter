import React from "react";
import { RandomVideos } from "./RandomVideos";


export const VideoDisplay = ({video}) => {
  return (

    <div className="flex flex-wrap justify-center ">
       <RandomVideos />
      </div>
  )
}