import React, { useState} from "react";
import { ChannelSearchBar } from "./ChannelSearchBar";
import {Footer} from '../Footer';
import axios from "axios";
import { MobileFooter } from "../MobileFooter";
import { ScrollButton } from "../ScrollButton";
import { RandomVideos } from "./RandomVideos";





export const VideoShowcase = ({}) => {
  const [randomVideo, setRandomVideo] = useState(null);



  const fetchVideo = async (query) => {
    const res = await axios.get(`https://dailyvid-service.onrender.com/data/random/?q=${query}`);
    // const res = await axios.get(`http://localhost:8585/data/random/?q=${query}`);

 setRandomVideo(res.data.items[0])
  
};




return (
  <>
  <div className="mt-5 flex-col items-center justify-center mx-auto min-h-[45vh] lg:min-h-[80vh] mb-5">
  <div className=" flex  justify-center">
        <h1 id="" className=" flex justify-center text-l mt-10  border-b-2  ">Video Roulette</h1>

        </div>
    <ChannelSearchBar fetchVideo={fetchVideo} />



  {randomVideo ? <RandomVideos video={randomVideo} /> : null} 
    <div className="flex">
    </div>
  <ScrollButton />
  </div>
  <Footer />
  <MobileFooter />
  </>
);
};


