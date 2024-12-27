import React from 'react'
// import  '../../public/Videos/hero.mp4'

const Hero = () => {
  return (
    <div className="w-full sm:h-[calc(80vh)] flex items-center  bg-white object-cover">
      <video autoPlay muted loop className="w-full sm:h-full  ">
           <source src='./Videos/hero.mp4' type="video/mp4" />
           Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Hero