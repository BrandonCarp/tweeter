import { useState } from "react";
import homeImg from './Imgs/homePage.jpg';

export function Home() {
  
  return (
    <>

    <div className=" relative mx-auto container">
      <div className="flex flex-col items-center ">
      <h1 className="">Tweeter</h1>
      <p></p>
      <div className="md:w-[80%] lg:w-[70%]">
      <img className="" src={homeImg } alt='friends laughing'/>
      </div>
      </div>

      
    </div>

    </>
  );
}
