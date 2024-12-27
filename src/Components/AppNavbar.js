import React, { useState, useEffect } from 'react';

const AppNavbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownIcon, setDropdownIcon] = useState("bi-chevron-down");
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    setDropdownIcon("bi-chevron-up")
  };
  const handleMouseOut = () => {
    setIsDropdownOpen(false);
    setDropdownIcon("bi-chevron-down")
  }
  const handleMouseClick = () =>{
    setIsSubmenuOpen(!isSubmenuOpen);
  }
  return (
    <>
      <div className="sm:hidden navbar flex justify-between items-center bg-amber-900 px-4 text-white shadow-xl shadow-white">

        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} className=''>
        <a href="#!"><i class="bi bi-list font-extrabold text-3xl"></i></a>
          {isDropdownOpen && (
            <div className="dropdown-menu absolute flex flex-col bg-amber-900 px-4 py-2 text-slate-100 text-sm z-10 gap-2 left-0">
              <a href="#!">About Us</a>
              <a href="#!" onClick={handleMouseClick}>Our Services</a>
              {isSubmenuOpen && (
                  <div className=" flex flex-col bg-amber-900 px-4 pb-2 border-b-2 gap-1 text-slate-100 text-sm">
                  <a href="#!" className=' hover:text-gray-300'>Invitation Cards</a>
              <a href="#!" className=' hover:text-gray-300'>Hall Booking</a>
              <a href="#!" className=' hover:text-gray-300'>Catering Services</a>
              <a href="#" className=' hover:text-gray-300'>Videography</a><hr/>
              <a href="#!" className=' hover:text-gray-300'>Complete Event packages</a>
                  </div>
                )

                }
        
              

              <a href="#!">Contect Us</a>
            </div>
          )}
        </div>
        <div className="logo">
          <img className='h-20' src="logoNew.jpg" alt="Celebrate Togather" />
        </div>
        <div className="profile">profile</div>
      </div>
    </>
  )
}

export default AppNavbar