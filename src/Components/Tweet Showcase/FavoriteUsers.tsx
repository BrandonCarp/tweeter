import React from "react"
import userPhoto from '../User Search Page/Imgs/me and ko.jpg';
export const FavoriteUsers = () => {
  return (
    <>
 <div className="">
          <p>x</p>
          <div className="  rounded">
           
<img src={userPhoto} 
alt='user photo'
className="h-[10rem] md:h-[15rem] rounded"
/>
<h2 className="text-center">Persons Name</h2>
<h3 className="text-center">yoyo@twitteruser</h3>
{/* Tweet Carasal map the top then map these */}
<div className="flex space-x-5 justify-center">

  <h1>img2</h1><h1>img3</h1>


</div>
          </div>
         </div>
    </>
  )
}