import React, { useState } from "react";
import { FavoriteUsers } from "./FavoriteUsers";
import { ChannelSearchBar } from "./ChannelSearchBar";
import { UserListProps } from "../Types/ThemeName";
import axios from "axios";

export const TweetShowcase = () => {
  const [channelNames, setChannelNames] = useState();

  const fetchChannels = async (query: UserListProps) => {
    const res = await axios.get(
      `http://localhost:8000/data/channels/videos/?q=${query}`
    );

    setChannelNames(res.data.items);
    console.log(res.data);
  };
  return (
    <div className="mt-5 ">
      <ChannelSearchBar fetchChannels={fetchChannels} />
      <div>
        <h1>Channel Names</h1>
        <button onClick={(e) => console.log(channelNames)}>Click Test</button>
      </div>
      <FavoriteUsers />
    </div>
  );
};
