import React, {useContext} from "react"
import userPhoto from '../User Search Page/Imgs/me and ko.jpg';
import { ThemeContext } from "../Context/ThemeContext";
import "../Styles/darkMode.css"
import { Carousel } from "./Carousel";



export const FavoriteUsers = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
 <div className=" border-y border-borderGray w-screen my-5">
  <div className="mx-auto relative container  ">
    <button>Remove</button>
    <div className="flex  justify-center p-10">
          <div className="  rounded">
           
<img src={userPhoto} 
alt='user photo'
className="h-[10rem] md:h-[15rem] rounded"
/>
<h2 className="text-center">Persons Name</h2>
<h3 className="text-center">yoyo@twitteruser</h3>
{/* Tweet Carasal map the top then map these */}
<div className="flex space-x-5 justify-center">

  

</div>
<div className="flex items-center justify-center space-x-10">
<Carousel />
</div>

          </div>
    </div>

  </div>
         
         </div>
    </>
  )
}