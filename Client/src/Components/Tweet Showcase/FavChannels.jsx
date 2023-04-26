import React from "react";
import {FavoriteUsers} from './FavoriteUsers';

export const FavChannels = ({channelData}) => {
  return (
    <>

    {channelData.map((data) => {
      <FavoriteUsers channelName={data.userName} thumbnail={data.thumbnail} videoData={data.data}/>
    })}
    </>
  )
}