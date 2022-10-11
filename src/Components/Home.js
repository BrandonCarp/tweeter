
import homeImg from './Imgs/homePage.jpg';
import { NavLink } from 'react-router-dom';
import {BsArrowRightCircle} from 'react-icons/bs'

export function Home() {
  
  return (
    <>

    <div className=" relative mx-auto   ">
      <div className="flex flex-col items-center  justify-center space-y-10">
      <h1 className='text-[1.2rem] '>Connecting people online everyday</h1>
      <ul>
      <li className='hover:animate-bounce'><NavLink to='/usersearch'><BsArrowRightCircle className='inline text-baselg mb-1 mr-2 ' />Find out who's tweeting</NavLink></li>
      </ul>
      <img className="p-5 md:p-[4rem] lg:p-[7rem]" src={homeImg } alt='friends laughing'/>
     
      </div>

      
    </div>

    </>
  );
}
