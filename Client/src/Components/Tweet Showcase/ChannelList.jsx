import React from "react";
import { ChannelNames } from "./ChannelNames";

export const ChannelList = ({ channelData, myFetch}) => {
  return (
    <>
    <div className="flex-col mx-auto items-center justify-center">
      {channelData.map((data) =>(
        <ChannelNames  myFetch={myFetch}  channelId={data.snippet.channelId}  key={data.id.channelId} userName={data.snippet.channelTitle} thumbnail={data.snippet.thumbnails.default.url}/>
      ))}
      </ div>
    </>
  );
};
