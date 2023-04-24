import React from "react";
import {FavoriteUsers} from './FavoriteUsers';

export const FavoriteChannels = ({channelData}) => {
  return (
    <>
    {channelData.map((data) => {
      <FavoriteUsers />
    })}
    </>
  )
}