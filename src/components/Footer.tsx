// import React from 'react'
// import "./Topbar.css"

// function Footer() {
//     return (
//         <div className="bg-gradient-to-r from-blue-500 via-green-500 to-blue-500">
//         <div className='bg sm:h-[150px] '>
            
//             <div className='border-b mx-[2%]  sm:flex sm:justify-between p-6'>
//                      <button className='button-text'>Filecoin</button>

//                 <div className='flex flex-col font-extrabold text-white'>
//                     <span className='flex justify-center sm:flex sm:justify-end mb-[7px]'> 
//                         Social Connect
//                     </span>
//                     <div className='flex justify-center sm:justify-start gap-[7px]' >
//                         {/* discord */}
//                         <a href="" target="_blank" rel="noreferrer">  
//                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
//                                 <circle cx="12" cy="12" r="12" fill="white" />
//                                 <path d="M18.5431 6.16349C17.3796 5.62113 16.12 5.22748 14.8078 5.00004C14.7963 4.99967 14.7849 5.00183 14.7743 5.00637C14.7637 5.0109 14.7542 5.0177 14.7466 5.02628C14.5891 5.31496 14.4054 5.69111 14.2829 5.97978C12.8912 5.76984 11.4758 5.76984 10.084 5.97978C9.96157 5.68236 9.77787 5.31496 9.61166 5.02628C9.60292 5.00879 9.57667 5.00004 9.55043 5.00004C8.23827 5.22748 6.98735 5.62113 5.81516 6.16349C5.80641 6.16349 5.79766 6.17223 5.78891 6.18098C3.40954 9.7413 2.75346 13.2054 3.07712 16.6345C3.07712 16.652 3.08587 16.6695 3.10337 16.6782C4.67795 17.8329 6.19131 18.5327 7.68717 18.9964C7.71341 19.0051 7.73965 18.9964 7.7484 18.9789C8.09831 18.4978 8.41323 17.9904 8.68441 17.4568C8.7019 17.4218 8.68441 17.3868 8.64942 17.378C8.1508 17.1856 7.67842 16.9582 7.21479 16.6957C7.1798 16.6782 7.1798 16.6257 7.20604 16.5995C7.30227 16.5295 7.39849 16.4508 7.49472 16.3808C7.51221 16.3633 7.53846 16.3633 7.55595 16.3721C10.5652 17.7455 13.8106 17.7455 16.7848 16.3721C16.8023 16.3633 16.8285 16.3633 16.846 16.3808C16.9422 16.4595 17.0385 16.5295 17.1347 16.6083C17.1697 16.6345 17.1697 16.687 17.1259 16.7045C16.6711 16.9757 16.1899 17.1943 15.6913 17.3868C15.6563 17.3955 15.6476 17.4393 15.6563 17.4655C15.9363 17.9991 16.2512 18.5065 16.5923 18.9876C16.6186 18.9964 16.6448 19.0051 16.6711 18.9964C18.1757 18.5327 19.689 17.8329 21.2636 16.6782C21.2811 16.6695 21.2899 16.652 21.2899 16.6345C21.6748 12.6718 20.6513 9.23393 18.5781 6.18098C18.5693 6.17223 18.5606 6.16349 18.5431 6.16349ZM9.13929 14.5438C8.23827 14.5438 7.48597 13.7128 7.48597 12.6893C7.48597 11.6658 8.22078 10.8348 9.13929 10.8348C10.0665 10.8348 10.8014 11.6745 10.7926 12.6893C10.7926 13.7128 10.0578 14.5438 9.13929 14.5438ZM15.2364 14.5438C14.3354 14.5438 13.5831 13.7128 13.5831 12.6893C13.5831 11.6658 14.3179 10.8348 15.2364 10.8348C16.1637 10.8348 16.8985 11.6745 16.8898 12.6893C16.8898 13.7128 16.1637 14.5438 15.2364 14.5438Z" fill="url(#paint0_linear_1_337)" />
//                                 <defs>
//                                     <linearGradient id="paint0_linear_1_337" x1="19.8426" y1="10.4313" x2="9.62269" y2="20.1161" gradientUnits="userSpaceOnUse">
//                                         <stop stop-color="hsl(242, 90%, 46%)" />
//                                         <stop offset="1" stop-color="hsl(242, 90%, 46%)" />
//                                     </linearGradient>
//                                 </defs>
//                             </svg>
//                         </a>  
                        
//                         {/* medium */}
//                         <a href="" target="_blank" rel="noreferrer">
//                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <circle cx="12" cy="12" r="12" fill="white" />
//                                 <path d="M13.4609 12C13.4609 15.3133 11.5672 18 9.23 18C8.67525 18.001 8.12578 17.8467 7.61297 17.5457C7.10017 17.2448 6.63406 16.8031 6.24127 16.246C5.84848 15.6888 5.53669 15.0271 5.32371 14.2986C5.11074 13.57 5.00074 12.789 5 12C5 8.68534 6.89375 6.00001 9.23 6.00001C9.78483 5.99878 10.3344 6.15301 10.8473 6.45389C11.3602 6.75477 11.8264 7.19641 12.2193 7.75358C12.6122 8.31075 12.9241 8.97253 13.1371 9.70114C13.3502 10.4297 13.4602 11.2109 13.4609 12ZM18.1016 12C18.1016 15.12 17.1547 17.648 15.9866 17.648C14.8184 17.648 13.8716 15.1187 13.8716 12C13.8716 8.88 14.8184 6.35201 15.9866 6.35201C17.1547 6.35201 18.1016 8.88134 18.1016 12ZM20 12C20 14.7947 19.6672 17.06 19.2556 17.06C18.845 17.06 18.5122 14.7933 18.5122 12C18.5122 9.20534 18.845 6.94001 19.2566 6.94001C19.6672 6.94001 20 9.20534 20 12Z" fill="url(#paint0_linear_1_331)" />
//                                 <defs>
//                                     <linearGradient id="paint0_linear_1_331" x1="18.753" y1="10.6554" x2="10.0261" y2="18.5339" gradientUnits="userSpaceOnUse">
//                                         <stop stop-color="hsl(242, 90%, 46%)" />
//                                         <stop offset="1" stop-color="hsl(242, 90%, 46%)" />
//                                     </linearGradient>
//                                 </defs>
//                             </svg>
//                         </a>    
//                         {/* twitter */}
//                         <a href="" target="_blank" rel="noreferrer">  
//                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <circle cx="12" cy="12" r="12" fill="white" />
//                                 <path d="M19 7.43768C18.4363 7.67803 17.8401 7.83691 17.23 7.90939C17.8736 7.53152 18.356 6.93707 18.5875 6.2363C17.9827 6.59013 17.3206 6.83942 16.63 6.97334C16.1684 6.48142 15.5537 6.15397 14.8824 6.04234C14.211 5.93072 13.5209 6.04124 12.9203 6.35657C12.3198 6.67191 11.8427 7.17421 11.5639 7.78471C11.2852 8.39521 11.2205 9.07937 11.38 9.72989C10.1571 9.6691 8.96083 9.35618 7.86899 8.81143C6.77715 8.26669 5.81413 7.50231 5.0425 6.56797C4.77185 7.03243 4.62964 7.55843 4.63 8.09365C4.62904 8.5907 4.75316 9.08027 4.99132 9.51878C5.22947 9.95728 5.57426 10.3311 5.995 10.607C5.50598 10.5939 5.02741 10.4649 4.6 10.2311V10.2679C4.60367 10.9644 4.852 11.6382 5.30299 12.1754C5.75398 12.7126 6.37994 13.0802 7.075 13.2161C6.80744 13.2961 6.52966 13.3383 6.25 13.3414C6.05642 13.3392 5.86332 13.3219 5.6725 13.2898C5.87043 13.8889 6.25347 14.4124 6.76831 14.7876C7.28314 15.1628 7.90418 15.3709 8.545 15.383C7.4629 16.2198 6.12691 16.6764 4.75 16.6802C4.4993 16.681 4.2488 16.6663 4 16.636C5.40582 17.528 7.04411 18.0015 8.7175 17.9995C9.87227 18.0113 11.0179 17.7969 12.0873 17.3687C13.1568 16.9405 14.1288 16.3072 14.9464 15.5057C15.764 14.7043 16.411 13.7508 16.8494 12.7009C17.2879 11.6509 17.509 10.5257 17.5 9.39085C17.5 9.26555 17.5 9.13288 17.5 9.00022C18.0885 8.56891 18.5961 8.04016 19 7.43768Z" fill="url(#paint0_linear_1_334)" />
//                                 <defs>
//                                     <linearGradient id="paint0_linear_1_334" x1="17.753" y1="10.6554" x2="9.02613" y2="18.5339" gradientUnits="userSpaceOnUse">
//                                         <stop stop-color="hsl(242, 90%, 46%)" />
//                                         <stop offset="1" stop-color="hsl(242, 90%, 46%)" />
//                                     </linearGradient>
//                                 </defs>
//                             </svg>
//                         </a>
                       


//                     </div>

//                 </div>
//             </div>

//             <div className='flex justify-center p-2 font-bold text-white'>
//             © 2023 |All rights reserved
//             </div>
//         </div>
//         </div>
//     )
// }

// export default Footer


import React from 'react';

function Footer() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-green-500 to-blue-500">
      <div className="bg sm:h-[150px]">
        <div className="border-b mx-[2%] sm:flex sm:justify-between p-6">
          <button className="button-text">Filecoin</button>

          <div className="flex flex-col font-extrabold text-white">
            <span className="flex justify-center sm:flex sm:justify-end mb-[7px]">
              Social Connect
            </span>
            <div className="flex justify-center sm:justify-start gap-[7px]">
              {/* discord */}
              <a href="" target="_blank" rel="noreferrer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="white" />
                  <path
                    d="M18.5431 6.16349C17.3796 5.62113 16.12 5.22748 14.8078 5.00004C14.7963 4.99967 14.7849 5.00183 14.7743 5.00637C14.7637 5.0109 14.7542 5.0177 14.7466 5.02628C14.5891 5.31496 14.4054 5.69111 14.2829 5.97978C12.8912 5.76984 11.4758 5.76984 10.084 5.97978C9.96157 5.68236 9.77787 5.31496 9.61166 5.02628C9.60292 5.00879 9.57667 5.00004 9.55043 5.00004C8.23827 5.22748 6.98735 5.62113 5.81516 6.16349C5.80641 6.16349 5.79766 6.17223 5.78891 6.18098C3.40954 9.7413 2.75346 13.2054 3.07712 16.6345C3.07712 16.652 3.08587 16.6695 3.10337 16.6782C4.67795 17.8329 6.19131 18.5327 7.68717 18.9964C7.71341 19.0051 7.73965 18.9964 7.7484 18.9789C8.09831 18.4978 8.41323 17.9904 8.68441 17.4568C8.7019 17.4218 8.68441 17.3868 8.64942 17.378C8.1508 17.1856 7.67842 16.9582 7.21479 16.6957C7.1798 16.6782 7.1798 16.6257 7.20604 16.5995C7.30227 16.5295 7.39849 16.4508 7.49472 16.3808C7.51221 16.3633 7.53846 16.3633 7.55595 16.3721C10.5652 17.7455 13.8106 17.7455 16.7848 16.3721C16.8023 16.3633 16.8285 16.3633 16.846 16.3808C16.9422 16.4595 17.0385 16.5295 17.1347 16.6083C17.1697 16.6345 17.1697 16.687 17.1259 16.7045C16.6711 16.9757 16.1899 17.1943 15.6913 17.3868C15.6563 17.3955 15.6476 17.4393 15.6563 17.4655C15.9363 17.9991 16.2512 18.5065 16.5923 18.9876C16.6186 18.9964 16.6448 19.0051 16.6711 18.9964C18.1757 18.5327 19.689 17.8329 21.2636 16.6782C21.2811 16.6695 21.2899 16.652 21.2899 16.6345C21.6748 12.6718 20.6513 9.23393 18.5781 6.18098C18.5693 6.17223 18.5606 6.16349 18.5431 6.16349ZM9.13929 14.5438C8.23827 14.5438 7.48597 13.7128 7.48597 12.6893C7.48597 11.6658 8.22078 10.8348 9.13929 10.8348C10.0665 10.8348 10.8014 11.6745 10.7926 12.6893C10.7926 13.7128 10.0578 14.5438 9.13929 14.5438ZM15.2364 14.5438C14.3354 14.5438 13.5831 13.7128 13.5831 12.6893C13.5831 11.6658 14.3179 10.8348 15.2364 10.8348C16.1637 10.8348 16.8985 11.6745 16.8898 12.6893C16.8898 13.7128 16.1637 14.5438 15.2364 14.5438Z"
                    fill="url(#paint0_linear_1_337)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_337"
                      x1="19.8426"
                      y1="10.4313"
                      x2="9.62269"
                      y2="20.1161"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="hsl(242, 90%, 46%)" />
                      <stop offset="1" stopColor="hsl(242, 90%, 46%)" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>

              {/* medium */}
              <a href="" target="_blank" rel="noreferrer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="white" />
                  <path
                    d="M13.4609 12C13.4609 15.3133 11.5672 18 9.23 18C8.67525 18.001 8.12578 17.8467 7.61297 17.5457C7.10017 17.2448 6.63406 16.8031 6.24127 16.246C5.84848 15.6888 5.53669 15.0271 5.32371 14.2986C5.11074 13.57 5.00074 12.789 5 12C5 8.68534 6.89375 6.00001 9.23 6.00001C9.78483 5.99878 10.3344 6.15301 10.8473 6.45389C11.3602 6.75477 11.8264 7.19641 12.2193 7.75358C12.6122 8.31075 12.9241 8.97253 13.1371 9.70114C13.3502 10.4297 13.4602 11.2109 13.4609 12ZM18.1016 12C18.1016 15.12 17.1547 17.648 15.9866 17.648C14.8184 17.648 13.8716 15.1187 13.8716 12C13.8716 8.88 14.8184 6.35201 15.9866 6.35201C17.1547 6.35201 18.1016 8.88134 18.1016 12ZM20 12C20 14.7947 19.6672 17.06 19.2556 17.06C18.845 17.06 18.5122 14.7933 18.5122 12C18.5122 9.20534 18.845 6.94001 19.2566 6.94001C19.6672 6.94001 20 9.20534 20 12Z"
                    fill="url(#paint0_linear_1_331)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_331"
                      x1="18.753"
                      y1="10.6554"
                      x2="10.0261"
                      y2="18.5339"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="hsl(242, 90%, 46%)" />
                      <stop offset="1" stopColor="hsl(242, 90%, 46%)" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>

              {/* twitter */}
              <a href="" target="_blank" rel="noreferrer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="white" />
                  <path
                    d="M19 7.43768C18.4363 7.67803 17.8401 7.83691 17.23 7.90939C17.8736 7.53152 18.356 6.93707 18.5875 6.2363C17.9827 6.59013 17.3206 6.83942 16.63 6.97334C16.1684 6.48142 15.5537 6.15397 14.8824 6.04234C14.211 5.93072 13.5209 6.04124 12.9203 6.35657C12.3198 6.67191 11.8427 7.17421 11.5639 7.78471C11.2852 8.39521 11.2205 9.07937 11.38 9.72989C10.1571 9.6691 8.96083 9.35618 7.86899 8.81143C6.77715 8.26669 5.81413 7.50231 5.0425 6.56797C4.77185 7.03243 4.62964 7.55843 4.63 8.09365C4.62904 8.5907 4.75316 9.08027 4.99132 9.51878C5.22947 9.95728 5.57426 10.3311 5.995 10.607C5.50598 10.5939 5.02741 10.4649 4.6 10.2311V10.2679C4.60367 10.9644 4.852 11.6382 5.30299 12.1754C5.75398 12.7126 6.37994 13.0802 7.075 13.2161C6.80744 13.2961 6.52966 13.3383 6.25 13.3414C6.05642 13.3392 5.86332 13.3219 5.6725 13.2898C5.87043 13.8889 6.25347 14.4124 6.76831 14.7876C7.28314 15.1628 7.90418 15.3709 8.545 15.383C7.4629 16.2198 6.12691 16.6764 4.75 16.6802C4.4993 16.681 4.2488 16.6663 4 16.636C5.40582 17.528 7.04411 18.0015 8.7175 17.9995C9.87227 18.0113 11.0179 17.7969 12.0873 17.3687C13.1568 16.9405 14.1288 16.3072 14.9464 15.5057C15.764 14.7043 16.411 13.7508 16.8494 12.7009C17.2879 11.6509 17.509 10.5257 17.5 9.39085C17.5 9.26555 17.5 9.13288 17.5 9.00022C18.0885 8.56891 18.5961 8.04016 19 7.43768Z"
                    fill="url(#paint0_linear_1_334)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_334"
                      x1="17.753"
                      y1="10.6554"
                      x2="9.02613"
                      y2="18.5339"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="hsl(242, 90%, 46%)" />
                      <stop offset="1" stopColor="hsl(242, 90%, 46%)" />
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center p-2 font-bold text-white">
          © 2023 | All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
