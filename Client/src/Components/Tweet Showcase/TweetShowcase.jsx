import React, { useState } from "react";
import { FavoriteUsers } from "./FavoriteUsers";
import { ChannelSearchBar } from "./ChannelSearchBar";
import { UserListProps } from "../Types/ThemeName";
import { ChannelList } from "./ChannelList";
import axios from "axios";

export const TweetShowcase = () => {
  const [channelNames, setChannelNames] = useState([]);

  const fetchChannels = async (query) => {
    const res = await axios.get(
      `http://localhost:8000/data/channels/?q=${query}`
    );

    setChannelNames(res.data);
  };
  // Api for fetching channel PLAYLISTS
  // const res = await axios.get(
  //   `http://localhost:8000/data/channels/videos/?q=${query}`
  // );
  return (
    <div className="mt-5 ">
      <ChannelSearchBar fetchChannels={fetchChannels} />
      <div>
        <h1>Channel Names</h1>
        <button onClick={(e) => console.log(channelNames)}>Click Test</button>
      </div>
      {/* Favorite Users selection there */}
      {/* <FavoriteUsers /> */}
      <ChannelList channels={channelNames} />
    </div>
  );
};
