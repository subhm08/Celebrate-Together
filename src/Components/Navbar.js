import React, { useState, useEffect } from 'react';
import Login from './Login';
import UserModal from './UserModal';
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownIcon, setDropdownIcon] = useState("bi-chevron-down");

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const OpenLoginWindow = () => {
    setIsLoginOpen(!isLoginOpen);
    isLoginOpen && console.log('hello user');
    };
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    setDropdownIcon("bi-chevron-up")
  };
  const handleMouseOut = () =>{
    setIsDropdownOpen(false);
    setDropdownIcon("bi-chevron-down")
  }
  return (
    <div className="hidden  navbar sm:flex items-end justify-between bg-amber-900 w-full text-white px-4 font-mono ">
      <div className="logo">
        <img className='h-24' src="logoNew.jpg" alt="Celebrate Togather" />
      </div>
      <div className="navlink flex gap-8 items-center py-2">
        <a href="" className=' hover:text-gray-300 text-lg'>About Us</a>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} className=''>
        <a href="" className=' relative hover:text-gray-300 text-lg'>Our Services<i class={`bi ${dropdownIcon} pl-1`}></i></a>
        {isDropdownOpen && (
            <div className="dropdown-menu absolute flex flex-col bg-amber-900 px-4 py-2 text-slate-100 text-sm z-10 gap-2">
                <a href="#!" className=' hover:text-gray-300'>Invitation Cards</a>
                <a href="#!" className=' hover:text-gray-300'>Hall Booking</a>
                <a href="#!" className=' hover:text-gray-300'>Catering Services</a>
                <a href="#!" className=' hover:text-gray-300'>Videography</a><hr/>
                <a href="#!" className=' hover:text-gray-300 text-base'>Complete Event packages</a>
            </div>
          )}
        </div>
        <a href="" className=' hover:text-gray-300 text-lg'>Contect Us</a>
      </div>
      <div className="profile py-2 mx-2">
        <button 
          className=' relative text-lg bg-white text-amber-600 px-4 py-2 rounded-lg font-mono font-bold hover:text-amber-800 hover:bg-slate-100'
          onClick={OpenLoginWindow}
        >Login</button>
        {isLoginOpen && <UserModal/>}
      </div>
    </div>
  )
}

export default Navbar