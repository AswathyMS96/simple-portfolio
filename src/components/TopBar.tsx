import React from 'react'
import "../components/Topbar.css"
import {AiFillPhone, AiOutlineMail} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'

function TopBar() {
  return (
    <div className='flex items-center justify-between px-4 py-2 bg-blue-100'>
        <div className='flex item-center '>
            <BsChatSquareDots size={30} className='mr-2 text-blue-500'/>
            <h1 className='text-xl font-bold'>WEBSITE.</h1>
        </div>
        <div className='flex'>
        <div className='items-center hidden px-6 md:flex'>
            <AiOutlineMail size={20} className='mr-2 text-blue-500'/>
            <p>msaswathy96@gmail.com</p>
        </div>
        <div className='items-center hidden px-6 md:flex'>
            <AiFillPhone size={20} className='mr-2 text-blue-500'/>
            <p>+971-5266-41458</p>
        </div>
        <button className='button-text'>ASWATHY MS</button>
        </div>
    </div>
  )
}

export default TopBar
