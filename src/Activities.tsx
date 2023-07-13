import React from 'react'
import {DiTerminal} from 'react-icons/di';

function Activities() {
  return (
    <div className='items-center w-full text-white bg-black'>

    
    <div className='max-w-[1240px] mx-auto px-4 py-16 '>
     <div>
        <h1 className='py-4 text-3xl font-bold text-center '>
           Master in <span className='text-blue-800'>Computer Science</span>
        </h1>
        <p className='py-4 text-xl'>
        Master's programs often allow you to choose a specific area of specialization within computer science that aligns with your interests and career goals. This specialization can help you develop expertise in a particular domain, making you an attractive candidate for job opportunities.</p>
        {/* card container */}
        <div className='grid gap-4 sm:grid-cols-3 lg:grid-cols-3'>
            {/* cards */}
            <div className='flex flex-col border'>
                <div><DiTerminal/></div>
                <h3 className='text-blue-800'>Front End Developer</h3>
                <p className=''>
                    Design,Create,and maintain software applications and systems.coding and testing applications,and ensuring that they meet the desired requirements and functionality.Understanding User Requirements,Designing Software Solutions,Writing Code,Testing and Debugging.               bugs or issues.
                </p>
            </div>
            <div>
            <div><DiTerminal/></div>
                <h3 className='text-blue-800'>Front End Developer</h3>
                <p className=''>
                    Design,Create,and maintain software applications and systems.coding and testing applications,and ensuring that they meet the desired requirements and functionality.Understanding User Requirements,Designing Software Solutions,Writing Code,Testing and Debugging.               bugs or issues.
                </p>
            </div>
            <div>
            </div>
            

            <p>
                card
            </p>
            <p>
                card
            </p>
            <p>
                card
            </p>
        </div>
     </div>
    </div>
    </div>
  )
}

export default Activities
