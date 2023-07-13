import React from 'react'
import "./Topbar.css"

function Footer() {
    return (
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
        <div className='bg sm:h-[150px] '>
            
            <div className='border-b mx-[2%]  sm:flex sm:justify-between p-6'>
                     <button className='button-text'>ASWATHY MS</button>

                {/* <img className='mx-auto sm:mx-0' src={footerLogo} alt="Bear Buster" /> */}
                <div className='flex flex-col font-extrabold text-white'>
                    <span className='flex justify-center sm:flex sm:justify-end mb-[7px]'> 
                        Social Connect
                    </span>
                    <div className='flex justify-center sm:justify-start gap-[7px]' >
                        {/* discord */}
                        <a href="" target="_blank" rel="noreferrer">  
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <circle cx="12" cy="12" r="12" fill="white" />
                                <path d="M18.5431 6.16349C17.3796 5.62113 16.12 5.22748 14.8078 5.00004C14.7963 4.99967 14.7849 5.00183 14.7743 5.00637C14.7637 5.0109 14.7542 5.0177 14.7466 5.02628C14.5891 5.31496 14.4054 5.69111 14.2829 5.97978C12.8912 5.76984 11.4758 5.76984 10.084 5.97978C9.96157 5.68236 9.77787 5.31496 9.61166 5.02628C9.60292 5.00879 9.57667 5.00004 9.55043 5.00004C8.23827 5.22748 6.98735 5.62113 5.81516 6.16349C5.80641 6.16349 5.79766 6.17223 5.78891 6.18098C3.40954 9.7413 2.75346 13.2054 3.07712 16.6345C3.07712 16.652 3.08587 16.6695 3.10337 16.6782C4.67795 17.8329 6.19131 18.5327 7.68717 18.9964C7.71341 19.0051 7.73965 18.9964 7.7484 18.9789C8.09831 18.4978 8.41323 17.9904 8.68441 17.4568C8.7019 17.4218 8.68441 17.3868 8.64942 17.378C8.1508 17.1856 7.67842 16.9582 7.21479 16.6957C7.1798 16.6782 7.1798 16.6257 7.20604 16.5995C7.30227 16.5295 7.39849 16.4508 7.49472 16.3808C7.51221 16.3633 7.53846 16.3633 7.55595 16.3721C10.5652 17.7455 13.8106 17.7455 16.7848 16.3721C16.8023 16.3633 16.8285 16.3633 16.846 16.3808C16.9422 16.4595 17.0385 16.5295 17.1347 16.6083C17.1697 16.6345 17.1697 16.687 17.1259 16.7045C16.6711 16.9757 16.1899 17.1943 15.6913 17.3868C15.6563 17.3955 15.6476 17.4393 15.6563 17.4655C15.9363 17.9991 16.2512 18.5065 16.5923 18.9876C16.6186 18.9964 16.6448 19.0051 16.6711 18.9964C18.1757 18.5327 19.689 17.8329 21.2636 16.6782C21.2811 16.6695 21.2899 16.652 21.2899 16.6345C21.6748 12.6718 20.6513 9.23393 18.5781 6.18098C18.5693 6.17223 18.5606 6.16349 18.5431 6.16349ZM9.13929 14.5438C8.23827 14.5438 7.48597 13.7128 7.48597 12.6893C7.48597 11.6658 8.22078 10.8348 9.13929 10.8348C10.0665 10.8348 10.8014 11.6745 10.7926 12.6893C10.7926 13.7128 10.0578 14.5438 9.13929 14.5438ZM15.2364 14.5438C14.3354 14.5438 13.5831 13.7128 13.5831 12.6893C13.5831 11.6658 14.3179 10.8348 15.2364 10.8348C16.1637 10.8348 16.8985 11.6745 16.8898 12.6893C16.8898 13.7128 16.1637 14.5438 15.2364 14.5438Z" fill="url(#paint0_linear_1_337)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_337" x1="19.8426" y1="10.4313" x2="9.62269" y2="20.1161" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="hsl(242, 90%, 46%)" />
                                        <stop offset="1" stop-color="hsl(242, 90%, 46%)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>  
                        {/* tiktok */}
                        <a href="" target="_blank" rel="noreferrer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="white" />
                                <path d="M16.0578 6.50667C16.0578 6.50667 16.5111 6.95111 16.0578 6.50667C15.4502 5.813 15.1153 4.92216 15.1156 4H12.3689V15.0222C12.3477 15.6187 12.0959 16.1837 11.6665 16.5982C11.237 17.0127 10.6635 17.2444 10.0667 17.2444C8.80444 17.2444 7.75556 16.2133 7.75556 14.9333C7.75556 13.4044 9.23111 12.2578 10.7511 12.7289V9.92C7.68444 9.51111 5 11.8933 5 14.9333C5 17.8933 7.45333 20 10.0578 20C12.8489 20 15.1156 17.7333 15.1156 14.9333V9.34222C16.2293 10.1421 17.5665 10.5712 18.9378 10.5689V7.82222C18.9378 7.82222 17.2667 7.90222 16.0578 6.50667Z" fill="url(#paint0_linear_1_340)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_340" x1="17.7791" y1="10.2072" x2="7.23491" y2="16.841" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="hsl(242, 90%, 46%)" />
                                        <stop offset="1" stop-color="hsl(242, 90%, 46%)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                        {/*  youtube*/}
                        <a href="" target="_blank" rel="noreferrer">  
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="white" />
                                <path d="M20.6243 7.87452C20.5219 7.51154 20.321 7.18052 20.0417 6.91459C19.7625 6.64866 19.4147 6.45716 19.0333 6.35924C17.629 6 12 6 12 6C12 6 6.37098 6 4.96674 6.35732C4.58509 6.45493 4.23715 6.64633 3.95787 6.91231C3.67859 7.17828 3.4778 7.50947 3.37567 7.87261C3 9.21019 3 12 3 12C3 12 3 14.7898 3.37567 16.1255C3.58259 16.8631 4.1933 17.4439 4.96674 17.6408C6.37098 18 12 18 12 18C12 18 17.629 18 19.0333 17.6408C19.8087 17.4439 20.4174 16.8631 20.6243 16.1255C21 14.7898 21 12 21 12C21 12 21 9.21019 20.6243 7.87452ZM10.2121 14.5605V9.43949L14.8728 11.9809L10.2121 14.5605Z" fill="url(#paint0_linear_1_344)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_344" x1="19.5036" y1="10.6554" x2="10.7591" y2="20.1287" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="hsl(242, 90%, 46%)" />
                                        <stop offset="1" stop-color="hsl(242, 90%, 46%)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                        {/* instagram */}
                        <a href="" target="_blank" rel="noreferrer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="white" />
                                <path d="M16.272 6.768C16.0821 6.768 15.8965 6.8243 15.7387 6.92979C15.5808 7.03528 15.4577 7.18521 15.3851 7.36062C15.3124 7.53604 15.2934 7.72906 15.3304 7.91529C15.3675 8.10151 15.4589 8.27256 15.5932 8.40682C15.7274 8.54108 15.8985 8.63251 16.0847 8.66955C16.2709 8.7066 16.464 8.68758 16.6394 8.61492C16.8148 8.54226 16.9647 8.41922 17.0702 8.26135C17.1757 8.10348 17.232 7.91787 17.232 7.728C17.232 7.47339 17.1309 7.22921 16.9508 7.04918C16.7708 6.86914 16.5266 6.768 16.272 6.768ZM19.952 8.704C19.9364 8.04024 19.8121 7.38352 19.584 6.76C19.3806 6.22651 19.064 5.74342 18.656 5.344C18.2599 4.93394 17.7756 4.61934 17.24 4.424C16.6181 4.18893 15.9607 4.06177 15.296 4.048C14.448 4 14.176 4 12 4C9.824 4 9.552 4 8.704 4.048C8.03932 4.06177 7.38187 4.18893 6.76 4.424C6.22534 4.62132 5.74155 4.93565 5.344 5.344C4.93394 5.74014 4.61934 6.22435 4.424 6.76C4.18893 7.38187 4.06177 8.03932 4.048 8.704C4 9.552 4 9.824 4 12C4 14.176 4 14.448 4.048 15.296C4.06177 15.9607 4.18893 16.6181 4.424 17.24C4.61934 17.7756 4.93394 18.2599 5.344 18.656C5.74155 19.0644 6.22534 19.3787 6.76 19.576C7.38187 19.8111 8.03932 19.9382 8.704 19.952C9.552 20 9.824 20 12 20C14.176 20 14.448 20 15.296 19.952C15.9607 19.9382 16.6181 19.8111 17.24 19.576C17.7756 19.3807 18.2599 19.0661 18.656 18.656C19.0658 18.2581 19.3827 17.7746 19.584 17.24C19.8121 16.6165 19.9364 15.9598 19.952 15.296C19.952 14.448 20 14.176 20 12C20 9.824 20 9.552 19.952 8.704ZM18.512 15.2C18.5062 15.7078 18.4142 16.211 18.24 16.688C18.1123 17.0362 17.9071 17.3507 17.64 17.608C17.3805 17.8724 17.0666 18.0771 16.72 18.208C16.243 18.3822 15.7398 18.4742 15.232 18.48C14.432 18.52 14.136 18.528 12.032 18.528C9.928 18.528 9.632 18.528 8.832 18.48C8.30471 18.4899 7.77968 18.4087 7.28 18.24C6.94863 18.1025 6.64908 17.8982 6.4 17.64C6.13447 17.383 5.93187 17.0682 5.808 16.72C5.61269 16.2361 5.50435 15.7216 5.488 15.2C5.488 14.4 5.44 14.104 5.44 12C5.44 9.896 5.44 9.6 5.488 8.8C5.49159 8.28084 5.58636 7.76636 5.768 7.28C5.90884 6.94233 6.12501 6.64133 6.4 6.4C6.64305 6.12493 6.94343 5.90648 7.28 5.76C7.76764 5.58403 8.2816 5.49206 8.8 5.488C9.6 5.488 9.896 5.44 12 5.44C14.104 5.44 14.4 5.44 15.2 5.488C15.7078 5.49382 16.211 5.5858 16.688 5.76C17.0515 5.89492 17.3778 6.11428 17.64 6.4C17.9022 6.64574 18.107 6.94619 18.24 7.28C18.4178 7.76715 18.5098 8.28142 18.512 8.8C18.552 9.6 18.56 9.896 18.56 12C18.56 14.104 18.552 14.4 18.512 15.2ZM12 7.896C11.1886 7.89758 10.396 8.13962 9.72212 8.59153C9.04828 9.04345 8.5235 9.68496 8.21411 10.435C7.90471 11.185 7.82458 12.01 7.98384 12.8055C8.14309 13.6011 8.53459 14.3316 9.10886 14.9048C9.68313 15.4779 10.4144 15.868 11.2103 16.0257C12.0062 16.1834 12.8309 16.1017 13.5804 15.7908C14.3298 15.48 14.9703 14.954 15.4209 14.2792C15.8715 13.6045 16.112 12.8114 16.112 12C16.1131 11.4601 16.0074 10.9253 15.801 10.4264C15.5946 9.92744 15.2916 9.47425 14.9095 9.09284C14.5273 8.71143 14.0736 8.40934 13.5742 8.20394C13.0749 7.99854 12.5399 7.89389 12 7.896ZM12 14.664C11.4731 14.664 10.9581 14.5078 10.52 14.215C10.0819 13.9223 9.74042 13.5063 9.53878 13.0195C9.33715 12.5327 9.2844 11.997 9.38719 11.4803C9.48998 10.9635 9.7437 10.4888 10.1163 10.1163C10.4888 9.7437 10.9635 9.48998 11.4803 9.38719C11.997 9.2844 12.5327 9.33715 13.0195 9.53878C13.5063 9.74042 13.9223 10.0819 14.215 10.52C14.5078 10.9581 14.664 11.4731 14.664 12C14.664 12.3498 14.5951 12.6963 14.4612 13.0195C14.3273 13.3427 14.1311 13.6364 13.8837 13.8837C13.6364 14.1311 13.3427 14.3273 13.0195 14.4612C12.6963 14.5951 12.3498 14.664 12 14.664Z" fill="url(#paint0_linear_1_328)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_328" x1="18.6699" y1="10.2072" x2="7.56626" y2="18.2265" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="hsl(242, 90%, 46%)" />
                                        <stop offset="1" stop-color="hsl(242, 90%, 46%)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                        {/* medium */}
                        <a href="" target="_blank" rel="noreferrer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="white" />
                                <path d="M13.4609 12C13.4609 15.3133 11.5672 18 9.23 18C8.67525 18.001 8.12578 17.8467 7.61297 17.5457C7.10017 17.2448 6.63406 16.8031 6.24127 16.246C5.84848 15.6888 5.53669 15.0271 5.32371 14.2986C5.11074 13.57 5.00074 12.789 5 12C5 8.68534 6.89375 6.00001 9.23 6.00001C9.78483 5.99878 10.3344 6.15301 10.8473 6.45389C11.3602 6.75477 11.8264 7.19641 12.2193 7.75358C12.6122 8.31075 12.9241 8.97253 13.1371 9.70114C13.3502 10.4297 13.4602 11.2109 13.4609 12ZM18.1016 12C18.1016 15.12 17.1547 17.648 15.9866 17.648C14.8184 17.648 13.8716 15.1187 13.8716 12C13.8716 8.88 14.8184 6.35201 15.9866 6.35201C17.1547 6.35201 18.1016 8.88134 18.1016 12ZM20 12C20 14.7947 19.6672 17.06 19.2556 17.06C18.845 17.06 18.5122 14.7933 18.5122 12C18.5122 9.20534 18.845 6.94001 19.2566 6.94001C19.6672 6.94001 20 9.20534 20 12Z" fill="url(#paint0_linear_1_331)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_331" x1="18.753" y1="10.6554" x2="10.0261" y2="18.5339" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="hsl(242, 90%, 46%)" />
                                        <stop offset="1" stop-color="hsl(242, 90%, 46%)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>    
                        {/* twitter */}
                        <a href="" target="_blank" rel="noreferrer">  
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="white" />
                                <path d="M19 7.43768C18.4363 7.67803 17.8401 7.83691 17.23 7.90939C17.8736 7.53152 18.356 6.93707 18.5875 6.2363C17.9827 6.59013 17.3206 6.83942 16.63 6.97334C16.1684 6.48142 15.5537 6.15397 14.8824 6.04234C14.211 5.93072 13.5209 6.04124 12.9203 6.35657C12.3198 6.67191 11.8427 7.17421 11.5639 7.78471C11.2852 8.39521 11.2205 9.07937 11.38 9.72989C10.1571 9.6691 8.96083 9.35618 7.86899 8.81143C6.77715 8.26669 5.81413 7.50231 5.0425 6.56797C4.77185 7.03243 4.62964 7.55843 4.63 8.09365C4.62904 8.5907 4.75316 9.08027 4.99132 9.51878C5.22947 9.95728 5.57426 10.3311 5.995 10.607C5.50598 10.5939 5.02741 10.4649 4.6 10.2311V10.2679C4.60367 10.9644 4.852 11.6382 5.30299 12.1754C5.75398 12.7126 6.37994 13.0802 7.075 13.2161C6.80744 13.2961 6.52966 13.3383 6.25 13.3414C6.05642 13.3392 5.86332 13.3219 5.6725 13.2898C5.87043 13.8889 6.25347 14.4124 6.76831 14.7876C7.28314 15.1628 7.90418 15.3709 8.545 15.383C7.4629 16.2198 6.12691 16.6764 4.75 16.6802C4.4993 16.681 4.2488 16.6663 4 16.636C5.40582 17.528 7.04411 18.0015 8.7175 17.9995C9.87227 18.0113 11.0179 17.7969 12.0873 17.3687C13.1568 16.9405 14.1288 16.3072 14.9464 15.5057C15.764 14.7043 16.411 13.7508 16.8494 12.7009C17.2879 11.6509 17.509 10.5257 17.5 9.39085C17.5 9.26555 17.5 9.13288 17.5 9.00022C18.0885 8.56891 18.5961 8.04016 19 7.43768Z" fill="url(#paint0_linear_1_334)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_334" x1="17.753" y1="10.6554" x2="9.02613" y2="18.5339" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="hsl(242, 90%, 46%)" />
                                        <stop offset="1" stop-color="hsl(242, 90%, 46%)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                        {/*  youtube*/}
                        <a href="" target="_blank" rel="noreferrer"> 
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="11.5" r="8.5" fill="url(#paint0_linear_1_325)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12ZM12.43 8.859C11.263 9.344 8.93 10.349 5.432 11.873C4.864 12.099 4.566 12.32 4.539 12.536C4.493 12.902 4.951 13.046 5.573 13.241C5.658 13.268 5.746 13.295 5.836 13.325C6.449 13.524 7.273 13.757 7.701 13.766C8.09 13.774 8.524 13.614 9.003 13.286C12.271 11.079 13.958 9.964 14.064 9.94C14.139 9.923 14.243 9.901 14.313 9.964C14.383 10.026 14.376 10.144 14.369 10.176C14.323 10.369 12.529 12.038 11.599 12.902C11.309 13.171 11.104 13.362 11.062 13.406C10.968 13.503 10.872 13.596 10.78 13.685C10.21 14.233 9.784 14.645 10.804 15.317C11.294 15.64 11.686 15.907 12.077 16.173C12.504 16.464 12.93 16.754 13.482 17.116C13.622 17.208 13.756 17.303 13.887 17.396C14.384 17.751 14.831 18.069 15.383 18.019C15.703 17.989 16.035 17.688 16.203 16.789C16.6 14.663 17.382 10.059 17.563 8.161C17.574 8.00341 17.5673 7.84509 17.543 7.689C17.5285 7.56293 17.4671 7.44693 17.371 7.364C17.228 7.247 17.006 7.222 16.906 7.224C16.455 7.232 15.763 7.473 12.43 8.859Z" fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_325" x1="19.5867" y1="9.59518" x2="7.78916" y2="18.1157" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="hsl(242, 90%, 46%)" />
                                        <stop offset="1" stop-color="hsl(242, 90%, 46%)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>


                    </div>

                </div>
            </div>

            <div className='flex justify-center p-2 font-bold text-white'>
            © 2023 |All rights reserved
            </div>
        </div>
        </div>
    )
}

export default Footer