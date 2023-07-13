import React, { useState} from 'react';
// import { BsChatSquareDots } from 'react-icons/bs';
// import React, { useState, useEffect } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaBars,
  FaGooglePlusG,
  FaInstagram,
} from 'react-icons/fa';

const Navbar = () => {
const [nav, setNav] = useState(false)

const handleNav= () =>{
    setNav(!nav)
}
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
      <ul className='hidden px-4 sm:flex '>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className='flex justify-between'>
        <FaFacebook className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>
      {/* Hamburger Menu */}
      <div onClick={handleNav} className='z-10 sm:hidden'>
        <FaBars size={20} className='mr-4 cursor-pointer'/>
      </div>
      {/* Mobile View */}
      <div onClick={handleNav} className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute left-0 top-0 w-full h-screen bg-black px-4 py-7 flex  flex-col':'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
        <ul className='w-full h-full pt-12 text-center'>
          <li className='py-8 text-2xl'>
            <a href="/">Home</a>
          </li>
          <li className='py-8 text-2xl'>
            <a href="#about">About</a>
          </li>
          <li className='py-8 text-2xl'>
            <a href="#gallery">Gallery</a>
          </li>
          <li className='py-8 text-2xl'>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


// import React, {useState, useEffect} from 'react';
// import { BsChatSquareDots } from 'react-icons/bs';
// import { FaCalendar } from 'react-icons/fa';
// import {
//         FaFacebook,
//         FaTwitter,FaBars,
//         FaGooglePlusG,
//         FaInstagram,
//         } from 'react-icons/fa';
// const Navbar = () =>{
// return 
// <div>
//     <ul>
//         <li>
//             <a href="/" >Home</a>
//         </li>
//         <li>
//             <a href="#about">About</a>
//         </li>
//         <li>
//             <a href="#gallary">Gallery</a>
//         </li>
//         <li>
//             <a href="#contact">Contact</a>
//         </li>
//     </ul>
//     <div>
//         <FaFacebook  className='mx-4'/>
//         <FaTwitter  className='mx-4'/>
//         <FaGooglePlusG  className='mx-4' />
//         <FaInstagram  className='mx-4' />
//     </div>
//     <div>
//         <FaBars />
//     </div>
//     <div>
//         <ul>
//             <li>
//                 <a href="/">Home</a>
//             </li>
//             <li>
//                 <a href="#about">About</a>
//             </li>
//             <li>
//                 <a href="#gallary">Gallery</a>
//             </li>
//             <li>
//                 <a href="#contact">Contact</a>
//             </li>
//         </ul>
//     </div>
// </div>
// };

// export default Navbar;