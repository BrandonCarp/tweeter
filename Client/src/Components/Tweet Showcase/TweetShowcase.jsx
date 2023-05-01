import React, { useState } from "react";
import { FavChannels } from "./FavChannels";
import { ChannelSearchBar } from "./ChannelSearchBar";
import { ChannelList } from "./ChannelList";
import {Footer} from '../Footer';
import axios from "axios";
import { MobileFooter } from "../MobileFooter";
import { ScrollButton } from "../ScrollButton";



export const TweetShowcase = () => {
  const [channelData, setChannelData] = useState([]);
  const [favoriteChannels, setFavoriteChannels] = useState([]);
 
  const fetchChannels =  async (query) => {
    const res =  await axios.get(
      `http://localhost:80/data/channels/?q=${query}`
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


const deleteChannel = (channelName) => {
  const newFavorites = favoriteChannels.filter((channel) => channel !== channelName);
  setFavoriteChannels(newFavorites);
};
  
  return (
    <>
    <div className="mt-5 flex-col items-center justify-center mx-auto min-h-[70vh]">
    <div className=" flex  justify-center">
          <h1 className=" flex justify-center text-l mt-10  border-b-2 ">Channel Search</h1>
          </div>
      <ChannelSearchBar fetchChannels={fetchChannels} />
 
       <FavChannels  favChannels={favoriteChannels} delBtn={deleteChannel}/> 
      <div className="flex">
<ChannelList myFetch={fetchRecent} channelData={channelData} /> 
      </div>
    <ScrollButton />
    </div>
    <Footer />
    <MobileFooter />
    </>
  );
};


