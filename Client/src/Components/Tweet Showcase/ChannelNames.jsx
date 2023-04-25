import React from "react";

export const ChannelNames = ({channelName,channelId,  myFetch, userName, thumbnail}) => {
  return (
    <>
    <button onClick={e => myFetch(channelId, userName, thumbnail)}>{channelName}</button>
    </>
  )
}

// ChannelNames myFetch={myFetch}  channelId={data.snippet.channelId}  key={data.id.channelId} channelName={data.snippet.channelTitle} thumbnail={data.snippet.thumbnails.default.url}/>