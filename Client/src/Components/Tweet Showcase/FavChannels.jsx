import React from "react";
import {FavoriteUsers} from './FavoriteUsers';

export const FavChannels = ({favChannels, delBtn}) => {
  return (
    <>
 

    {favChannels.map((data) => (
      <FavoriteUsers key={data.userName} delBtn={delBtn} channelName={data.userName} thumbnail={data.thumbnail} videoData={data.data.items}/>
    ))}
    </>
  )
}