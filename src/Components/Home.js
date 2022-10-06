import { useState } from "react";
import homeImg from './Imgs/homePage.jpg';

export function Home() {
  
  return (
    <>

    <div className=" relative mx-auto container  w-full">
      <div className="flex flex-col items-center justify-center">
      <h1>Connecting people online everyday</h1>
     
      <img className="" src={homeImg } alt='friends laughing'/>
     
      </div>

      
    </div>

    </>
  );
}
