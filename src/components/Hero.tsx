import React from 'react';
// import Bgimg from '../assets/background.png';

function Hero() {
  const Bgimg = require('../assets/background.png');

  return (
    <div className='w-fill h-[90vh]'>
      <img src={Bgimg} alt="/" className='object-cover w-full h-full'/>
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[35%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
        <h1 className='text-4xl font-bold'>My Experiences</h1>
        <h2 className='py-4 text-4xl italic '> Software Developer / Tester </h2>
        <p className='text-justify '>Front -End Developer with proven experience at Pride Group in Dubai. Create and maintain a
            better code base for reusability. Capable of continuous learning from senior developers while still
            nurturing junior developers. Experience in driving projects forward as the development team
            leader, facilitating projects from concept to launch. Passionate about learning and development
            with a desire to apply skills on a larger development team.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
