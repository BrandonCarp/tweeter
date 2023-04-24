import React from "react";

export const ChannelNames = ({channelName,channelId, myFetch}) => {
  return (
    <>
    <button onClick={e => myFetch(channelId)}>{channelName}</button>
    
    </>
  )
}