import React, { useState } from "react";
import { FavChannels } from "./FavChannels";
import { ChannelSearchBar } from "./ChannelSearchBar";
import { ChannelList } from "./ChannelList";
import {Footer} from '../Footer';
import axios from "axios";
import { MobileFooter } from "../MobileFooter";
import { ScrollButton } from "../ScrollButton";
import { AiOutlineClose } from "react-icons/ai";



export const TweetShowcase = () => {
  const [channelData, setChannelData] = useState([]);
  const [favoriteChannels, setFavoriteChannels] = useState([]);
  const [howToModal, setHowToModal] = useState(false);
 
 
  const fetchChannels =  async (query) => {
    // const res =  await axios.get(
    //   `https://dailyvid-service.onrender.com/data/channels/?q=${query}`
    // );
    // const res = await axios.get(
    //   `http://localhost:8585/data/channels?q=${query}`
    // );
    const res = await axios.get(`https://localhost:8585/data/search/?q=${query}`);
   
    setChannelData(res.data.items);
  };

  const fetchRecent = async (query, userName, thumbnail) => {
    // const res = await axios.get(`https://dailyvid-service.onrender.com/data/search/?q=${query}`);
    const res = await axios.get(`https://localhost:8585/data/search/?q=${query}`);
  const newChannel = {
    userName,
    thumbnail,
    data: res.data
  }

  setFavoriteChannels(prevChannel => [...prevChannel, newChannel]);
  
};

const modalBtn = () => {
  setHowToModal(true);
}


const deleteChannel = (channelName) => {
  const newFavorites = favoriteChannels.filter((channel) => channel.userName !== channelName);
  setFavoriteChannels(newFavorites);
};


return (
  <>
  <div className="mt-5 flex-col items-center justify-center mx-auto min-h-[70vh] mb-5">
  <div className=" flex  justify-center">
        <h1 id="" className=" flex justify-center text-l mt-10  border-b-2  ">Channel Search</h1>

        </div>
    <ChannelSearchBar fetchChannels={fetchChannels} />

  <button onClick={e => console.log(channelData)}>Click</button>

     <FavChannels  favChannels={favoriteChannels} delBtn={deleteChannel}/> 
    <div className="flex">
{/* <ChannelList myFetch={fetchRecent} channelData={channelData} />  */}
    </div>
  <ScrollButton />
  </div>
  <Footer />
  <MobileFooter />
  </>
);
};


