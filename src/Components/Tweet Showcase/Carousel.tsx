import React from "react";
import Kohaku from "../User Search Page/Imgs/me and ko.jpg";


export const Carousel = () => {
  return (
    <>
    <div className="carousel p-4 flex items-center justify-start space-x-5 overflow-x-auto">
    <img
          src={Kohaku}
          alt="tweeters profile"
          className="h-20"
        />
          <img
          src={Kohaku}
          alt="tweeters profile"
          className="h-20"
        />
          <img
          src={Kohaku}
          alt="tweeters profile"
          className="h-20"
        />
          <img
          src={Kohaku}
          alt="tweeters profile"
          className="h-20"
        />
          <img
          src={Kohaku}
          alt="tweeters profile"
          className="h-20"
        />
          <img
          src={Kohaku}
          alt="tweeters profile"
          className="h-20"
        />
          <img
          src={Kohaku}
          alt="tweeters profile"
          className="h-20"
        />
    </div>

    </>
  )
}