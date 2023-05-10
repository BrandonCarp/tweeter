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
    const res =  await axios.get(
      `http://localhost:80/data/channels/?q=${query}`
    );
    
    setChannelData(res.data.items);
  };

  const fetchRecent = async (query, userName, thumbnail) => {
    const res = await axios.get(`http://localhost:80/data/search/?q=${query}`);

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

      { howToModal == false ? <div className="mx-auto relative container border-4 rounded pb-6 px-4 md:w-[40%] lg:w-[30%]">
    <button className="pt-3" onClick={modalBtn}><AiOutlineClose className="" /></button>
    <section className="flex-col justify-center items-center ">
    <h1 className="text-center text-baselg">DailyVid's Favorite Channel Page</h1>
     <p className="text-center">To use this page, just search a youtube channel you like. Once you see the list of channels appear, click on the desired channel to add it to your favorite channel list!</p>
    </section>
  </div> : null }

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


