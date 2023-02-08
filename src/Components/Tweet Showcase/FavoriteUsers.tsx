import React, { useContext } from "react";
import userPhoto from "../User Search Page/Imgs/me and ko.jpg";
import bingChilling from "../User Search Page/Imgs/john cena.jpg";
import { ThemeContext } from "../Context/ThemeContext";
import "../Styles/darkMode.css";
import { Carousel } from "./Carousel";

export const FavoriteUsers = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img
          src={bingChilling}
          alt="user photo"
          className="h-[10rem] md:h-[15rem] rounded"
        />

        <h2 className="font-bold mt-3">John Cena</h2>
        <h3 className="text-sm text-secondaryGray mb-2">
          johnloves@bingChilling
        </h3>
      </div>
      <div>
        <Carousel />
      </div>
    </>
  );
};
