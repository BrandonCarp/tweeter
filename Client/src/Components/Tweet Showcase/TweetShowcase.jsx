import React, { useState } from "react";
import { FavoriteChannels } from "./FavoriteChannels";
import { ChannelSearchBar } from "./ChannelSearchBar";
import { ChannelList } from "./ChannelList";
import loading from './Imgs/loading.gif';
import {Footer} from '../Footer';
import axios from "axios";
import { MobileFooter } from "../MobileFooter";

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

        if(favoriteChannels.length >= 5){
          favoriteChannels.filter(favoriteChannels[0])
        } else {
        setFavoriteChannels((prevFavorites) => {
          return [res.data, ...prevFavorites];
        })}
  }
  
  return (
    <>
    <div className="mt-5 ">
      <ChannelSearchBar fetchChannels={fetchChannels} />
      <div>
        {/* <button onClick={(e) => console.log(channelNames)}>Click Test</button> */}
      </div>
      {/* Favorite Users selection there */}
      <FavoriteChannels  channelData={favoriteChannels}/>
      
      <button onClick={(e) => console.log(favoriteChannels)}>Click</button>
    {channelData.length > 5 ? <ChannelList myFetch={fetchPlayList} channelData={channelData} /> : <img className=" mx-auto " src={loading} />} 
    </div>
    <Footer />
    <MobileFooter />
    </>
  );
};
