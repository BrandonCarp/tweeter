import React, { useState } from "react";


export const ChannelNames = ({channelId,  myFetch, userName, thumbnail}) => {
  // const [youtubeChannel, setYoutubeChannel] = useState({
  //   userName: channelName,
  //   thumbnail: thumbnail
  // })

  const buttonClick = (e) => {
    const channel = {
      userName: userName,
      thumbnail: thumbnail
    }
     myFetch(channelId, userName, thumbnail)
  }
  return (
    <>
    <button onClick={buttonClick}>{userName}</button>
    </>
  )
}

// ChannelNames myFetch={myFetch}  channelId={data.snippet.channelId}  key={data.id.channelId} channelName={data.snippet.channelTitle} thumbnail={data.snippet.thumbnails.default.url}/>