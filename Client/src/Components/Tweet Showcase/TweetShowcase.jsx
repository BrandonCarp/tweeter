import React, { useState } from "react";
import { FavChannels } from "./FavChannels";
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

  const fetchRecent = async (query, userName, thumbnail) => {
    const res = await axios.get(`http://localhost:8000/data/search/?q=${query}`);

  const newChannel = {
    userName,
    thumbnail,
    data: res.data
  }
  
  setFavoriteChannels(prevChannel => [...prevChannel, newChannel]);
};
  
  return (
    <>
    <div className="mt-5 ">
      <ChannelSearchBar fetchChannels={fetchChannels} />
      <div>
        {/* <button onClick={(e) => console.log(channelNames)}>Click Test</button> */}
      </div>
      {/* Favorite Users selection there */}
      <FavChannels  channelData={favoriteChannels}/>
      
      <button onClick={(e) => console.log(channelData)}>Data</button>
      <button onClick={(e) => console.log(favoriteChannels)}>Fav</button>
    {channelData.length > 1 ? <ChannelList myFetch={fetchRecent} channelData={channelData} /> : <img className=" mx-auto " src={loading} />} 
    </div>
    <Footer />
    <MobileFooter />
    </>
  );
};


