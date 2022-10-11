
import homeImg from './Imgs/homePage.jpg';

export function Home() {
  
  return (
    <>

    <div className=" relative mx-auto   ">
      <div className="flex flex-col items-center  justify-center space-y-10">
      <h1 className='text-[1.2rem] '>Connecting people online everyday</h1>
      <img className="" src={homeImg } alt='friends laughing'/>
     
      </div>

      
    </div>

    </>
  );
}
