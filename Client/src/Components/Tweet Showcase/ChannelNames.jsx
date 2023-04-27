import React, { useState } from "react";


export const ChannelNames = ({channelId,  myFetch, userName, thumbnail}) => {

  const buttonClick = (e) => {
    const channel = {
      userName: userName,
      thumbnail: thumbnail
    }
     myFetch(channelId, userName, thumbnail)
  }
  return (
    <div className="relative mx-auto container">
      <button onClick={buttonClick}><h1 className="text-lg">{userName}</h1></button>
    </div>
  )
}
