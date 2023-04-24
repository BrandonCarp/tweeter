import React, { useState } from "react";
import { FavoriteUsers } from "./FavoriteUsers";
import { ChannelSearchBar } from "./ChannelSearchBar";
import { ChannelList } from "./ChannelList";
import loading from './Imgs/loading.gif';
import axios from "axios";

export const TweetShowcase = () => {
  const [channelData, setChannelData] = useState([]);
  const [favoriteChannels, setFavoriteChannels] = useState([]);

  const fetchChannels = async (query) => {
    const res = await axios.get(
      `http://localhost:8000/data/channels/?q=${query}`
    );

    setChannelData(res.data.items);
  };

  const fetchPlayList = async (query) => {
    const res = await axios.get(`http://localhost:8000/data/channels/videos/?q=${query}`);

     setFavoriteChannels(res.data);
  }
  
  return (
    <div className="mt-5 ">
      <ChannelSearchBar fetchChannels={fetchChannels} />
      <div>
        {/* <button onClick={(e) => console.log(channelNames)}>Click Test</button> */}
      </div>
      {/* Favorite Users selection there */}
      {/* <FavoriteUsers /> */}
      <button onClick={(e) => console.log(channelData)}>Click</button>
    <ChannelList channelData={channelData} /> 
    </div>
  );
};
