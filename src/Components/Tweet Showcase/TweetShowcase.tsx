import React from "react";
import userPhoto from '../User Search Page/Imgs/me and ko.jpg';
import {Users} from '../User Search Page/Users';

// transfer to usershowcase comp then import here w map
export const TweetShowcase = () => {
  return (
    <div className="">
      <h1>Tweeter Showcase</h1>
      <div className="relative container mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* Favorite Users */}
         <div className="">
          <p>x</p>
          <div className="  rounded">
           
<img src={userPhoto} 
alt='user photo'
className="h-[10rem] md:h-[15rem] rounded"
/>
<h2>Persons Name</h2>
<h3>yoyo@twitteruser</h3>
{/* Tweet Carasal map the top then map these */}
<div className="flex space-x-5">

  <h1>img2</h1><h1>img3</h1>


</div>
          </div>
         </div>
        </div>
        
      </div>
    </div>
  );
};
