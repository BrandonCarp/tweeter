import React from "react";
import { CarouselItem } from "./CarouselItem";


export const Carousel = () => {
  return (
    <>
    <div className="carousel p-4 flex items-center justify-start space-x-5 overflow-x-auto">
     <CarouselItem />
     <CarouselItem />
     <CarouselItem />
     <CarouselItem />
     <CarouselItem />
     
    
   

    </div>

    </>
  )
}