import React from "react";
import { ChannelNames } from "./ChannelNames";

export const ChannelList = ({ channelData, myFetch}) => {
  return (
    <>
    <div>
      {channelData.map((data) =>(
        <ChannelNames myFetch={myFetch} channelId={data.snippet.channelId}  id={data.id.channelId} channelName={data.snippet.channelTitle}/>
      ))}
      </ div>
    </>
  );
};
