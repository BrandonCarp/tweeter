import React from "react";
import { FavoriteUsers } from "./FavoriteUsers";
import { UserSearchBar } from "../User Search Page/UserSearchBar";

export const TweetShowcase = () => {
  return (
    <div className="mt-5">
      <UserSearchBar />
      <FavoriteUsers />
    </div>
  );
};
