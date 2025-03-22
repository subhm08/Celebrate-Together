import React, { useRef, useState } from 'react'
import IMAGES from './Image.js'
const Events = () => {
  const scrollRef = useRef(null);
  
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -100, // Adjust the value for scrolling distance
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 100, // Adjust the value for scrolling distance
      behavior: 'smooth',
    });
  };

  
  return (
    <div className='bg-gray-200 px-4 py-12 my-4'>
      <div className="flex  p-4 justify-between items-center ">
        <h1 className='font-bold font-display text-amber-700 text-3xl'>Our Events</h1>
        {/* <button className='px-4 py-2 font-mono border rounded-2xl border-slate-800 text-sm hover:bg-amber-700 hover:text-white font-bold' onClick={Expand}>See ALL</button> */}
        <div className='sm:btn-group hidden sm:block'>
        <i className="bi bi-arrow-left arrow" onClick={scrollLeft}></i>
        <i className="bi bi-arrow-right arrow" onClick={scrollRight}></i>
        </div>
      </div>
      <div ref={scrollRef} className={`flex gap-4 sm:flex-nowrap flex-wrap overflow-y-hidden hide-scrollbar`}>
        {
          IMAGES.map((img, index) => {
            return (
              <div class="relative sm:w-80 w-screen text-white p-4 flex items-center justify-center rounded-lg hover:scale-110 transition-all">
                <img src={img.img} alt="" className='sm:min-w-80 w-full aspect-video rounded-lg opacity-80' />
                <p className=" absolute text-2xl text-white font-display font-bold  backdrop-blur-sm w-5/6 text-center rounded-lg">{img.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Events