import React, { useState, useEffect } from 'react';
import UserModal from './UserModal';
import { NavLink } from 'react-router-dom';
const AppNavbar = () => {

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const OpenLoginWindow = () => {
    setIsLoginOpen(!isLoginOpen);
    isLoginOpen && console.log('hello user');
  };

  const handleMouseClick = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  }
  return (
    <>
      <div className="sm:hidden navbar flex justify-between items-center bg-amber-900 px-4 text-white shadow-xl shadow-white">

        <div className=''>
          <button onClick={openMenu}>{isMenuOpen ? (<i class="bi bi-x font-extrabold text-3xl"></i>) : (<i class="bi bi-list font-extrabold text-3xl"></i>)}</button>
          {isMenuOpen && (
            <div className="dropdown-menu absolute flex flex-col bg-[rgba(255, 255, 255, 1)] backdrop-blur-3xl px-4 py-2 text-amber-950 text-sm z-10 gap-2 left-0 font-semibold my-[1.3rem]">
              <NavLink to='/about' className=''>About Us</NavLink>
              <a onClick={handleMouseClick}>Our Services</a>
              {isSubmenuOpen && (
                <div className=" flex flex-col bg-amber-900\ px-4 pb-2 border-b-2 gap-1 text-amber-900 text-sm">
                  <NavLink to='/cards' >Invitation Cards</NavLink>
                  <NavLink to='/booking'>Hall Booking</NavLink>
                  <NavLink to='/catering' className='active:bg-white'>Catering Services</NavLink>
                  <NavLink to='/videography'>Videography</NavLink>
                </div>
              )
              }
              <NavLink to='/contect' className=' '>Contect Us</NavLink>
            </div>
          )}
        </div>
        <div className="logo">
          <img className='h-20' src="logoNew.jpg" alt="Celebrate Togather" />
        </div>
        <div className="profile">
          <button
            className=' relative text-base bg-white text-amber-600  px-4 py-2  rounded-lg font-mono font-bold hover:text-amber-800 hover:bg-slate-100'
            onClick={OpenLoginWindow}
          >{isLoginOpen ? (<i className='bi bi-x-lg font-bold'></i>) : "Login"}</button>
          {isLoginOpen && <UserModal />}
        </div>
      </div>
    </>
  )
}

export default AppNavbar