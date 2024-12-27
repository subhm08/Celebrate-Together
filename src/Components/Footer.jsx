import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-amber-900 px-4 py-10 flex sm:justify-between sm:flex-row flex-col gap-4'>
        <div>
            <h1 className='font-mono text-white text-2xl'>Quick Link</h1>
            <ul className='text-gray-300'>
              <li className='py-1 hover:underline'><a href='#'>Home</a></li>
              <li className='py-1 hover:underline'><a href='#'>About</a></li>
              <li className='py-1 hover:underline'><a href='#'>Contact</a></li>
            </ul>
        </div>
        <div>
            <h1 className='font-mono text-white text-2xl'>Get In Touch</h1>
            <p className='text-gray-300'>Email: <a href='mailto:example@example.com'> example@example.com</a></p>
            <p className='text-gray-300'>Phone: <a href='tel:+1234567890' >(123) 456-7890</a></p>
        </div>
        <div>
            <h1 className='font-mono text-white text-2xl'>Our Services</h1>
            <ul className='text-gray-300'>
              <li className='py-1 hover:underline'><a href='#'>Service 1</a></li>
              <li className='py-1 hover:underline'><a href='#'>Service 2</a></li>
              <li className='py-1 hover:underline'><a href='#'>Service 3</a></li>
            </ul>
        </div>
    </div>
    <div>
      <p className='text-center text-gray-700 py-4'>&copy; Copyright <a href="" className='font-semibold hover:underline'>Celebrate Togather</a>. All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer