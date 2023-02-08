import React, { useContext } from "react";
import userPhoto from "../User Search Page/Imgs/me and ko.jpg";
import { ThemeContext } from "../Context/ThemeContext";
import "../Styles/darkMode.css";
import { Carousel } from "./Carousel";

export const FavoriteUsers = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img
          src={userPhoto}
          alt="user photo"
          className="h-[10rem] md:h-[15rem] rounded"
        />

        <h2 className="">Persons Name</h2>
        <h3 className="">yoyo@twitteruser</h3>
      </div>
      <div>
        <Carousel />
      </div>
    </>
  );
};
