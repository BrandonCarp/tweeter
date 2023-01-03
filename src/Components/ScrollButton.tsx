import React, {useState} from "react"
import {AiOutlineArrowUp} from 'react-icons/ai';



export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);


 const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

const scrollClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}

window.addEventListener('scroll' , toggleVisible);

return (

  
  <button className="fixed w-[100%] left-[43%]  bottom-[25%]  h-[50px]" style={{display: visible ? 'inline' : 'none'}} onClick={scrollClick}>Up Inc</button>

)
}