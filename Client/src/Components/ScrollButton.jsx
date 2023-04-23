import React, {useState} from "react"
import {FiArrowUpCircle} from 'react-icons/fi';



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

const scrollClick = (e) => {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}

window.addEventListener('scroll' , toggleVisible);

return (

  
  <button className="fixed  text-l    bottom-[25%]  right-[5%] md:right-[6%]" style={{display: visible ? 'inline' : 'none'}} onClick={scrollClick}><FiArrowUpCircle /></button>
  

)
}