import React, { useState } from "react";
import { VideoDisplay } from "./VideoDisplay";
import { ChannelSearchBar } from "./ChannelSearchBar";

import {Footer} from '../Footer';
import axios from "axios";
import { MobileFooter } from "../MobileFooter";
import { ScrollButton } from "../ScrollButton";




export const TweetShowcase = () => {
  const [randomVideo, setRandomVideo] = useState([]);

 

  const fetchVideo = async (query) => {
    const res = await axios.get(`https://dailyvid-service.onrender.com/data/random/?q=${query}`);
    // const res = await axios.get(`https://localhost:8585/data/random/?q=${query}`);

 setRandomVideo(res.data)
  
};




return (
  <>
  <div className="mt-5 flex-col items-center justify-center mx-auto min-h-[70vh] mb-5">
  <div className=" flex  justify-center">
        <h1 id="" className=" flex justify-center text-l mt-10  border-b-2  ">Video Roulette</h1>

        </div>
    <ChannelSearchBar fetchVideo={fetchVideo} />

  <button onClick={e => console.log(randomVideo)}>Test Click</button>

   <VideoDisplay randomVideo={randomVideo} />
    <div className="flex">
    </div>
  <ScrollButton />
  </div>
  <Footer />
  <MobileFooter />
  </>
);
};


