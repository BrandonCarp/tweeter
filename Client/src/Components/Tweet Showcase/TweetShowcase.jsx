import React, { useState } from "react";
import { FavChannels } from "./FavChannels";
import { ChannelSearchBar } from "./ChannelSearchBar";
import { ChannelList } from "./ChannelList";
import loading from './Imgs/loading.gif';
import {Footer} from '../Footer';
import axios from "axios";
import { MobileFooter } from "../MobileFooter";
import {useQuery} from "@tanstack/react-query";


export const TweetShowcase = () => {
  const [channelData, setChannelData] = useState([]);
  const [favoriteChannels, setFavoriteChannels] = useState([]);
 
  const fetchChannels =  async (query) => {
    const res =  await axios.get(
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

const {isLoading, data: youtubeChannels} = useQuery(
  [`fetchChannels`, channelData],
  () => fetchChannels()
);

const {isLoadingRecent, data: recentChannels} = useQuery(
  [`fetchRecent`, favoriteChannels],
  () => fetchRecent()
);

const deleteChannel = (channelName) => {
  const newFavorites = favoriteChannels.filter((channel) => channel !== channelName);
  setFavoriteChannels(newFavorites);
};
  
  return (
    <>
    <div className="mt-5 flex-col items-center justify-center mx-auto">
      <ChannelSearchBar fetchChannels={fetchChannels} />
 
      {isLoadingRecent ? (null) : <FavChannels  favChannels={favoriteChannels} delBtn={deleteChannel}/> }
      <div className="flex">
       {isLoading ? (<img className=" mx-auto " alt="loading" src={loading} />) : <ChannelList myFetch={fetchRecent} channelData={channelData} />  }
      </div>
    
    </div>
    <Footer />
    <MobileFooter />
    </>
  );
};


