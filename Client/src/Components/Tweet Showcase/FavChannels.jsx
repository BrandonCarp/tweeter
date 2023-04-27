import React from "react";
import {FavoriteUsers} from './FavoriteUsers';

export const FavChannels = ({favChannels}) => {
  return (
    <>
 

    {favChannels.map((data) => (
      <FavoriteUsers key={data.userName} channelName={data.userName} thumbnail={data.thumbnail} videoData={data.data.items}/>
    ))}
    </>
  )
}