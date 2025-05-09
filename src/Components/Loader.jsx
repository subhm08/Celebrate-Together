import React from 'react'

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center bg-black justify-center">
      <video autoPlay muted className="w-full h-5/6  object-contain">
           <source src="Videos//loader.mp4" type="video/mp4" />
           Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Loader