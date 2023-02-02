import React from "react";
import userPhoto from '../User Search Page/Imgs/me and ko.jpg';
import { FavoriteUsers } from "./FavoriteUsers";
import {UserSearchBar} from '../User Search Page/UserSearchBar'

// transfer to usershowcase comp then import here w map
export const TweetShowcase = () => {
  return (
    <div className="">
      <div className="relative container mx-auto">
        <UserSearchBar />
        <div className="flex flex-col items-center justify-center ">
          {/* Favorite Users */}
          {/* Map these set limit to 5 Users */}
          <FavoriteUsers />
        </div>
        
      </div>
    </div>
  );
};
