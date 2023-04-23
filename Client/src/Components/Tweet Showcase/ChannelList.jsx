import React from "react";
import { ChannelNames } from "./ChannelNames";

export const ChannelList = ({ channelData}) => {
  return (
    <>
    <div>
      {channelData.map((data) =>(
        <ChannelNames  id={data.snippet.channelTitle} channelName={data.snippet.channelTitle}/>
      ))}
      </ div>
    </>
  );
};
