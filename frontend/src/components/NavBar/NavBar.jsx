import React from 'react'
import Home from '../../icons/home-icon.png'
import Message from '../../icons/message-icon.png'
import Video from '../../icons/video-icon.png'
import Logo from '../../icons/rtu-icon.png'
import Profile from '../../icons/profile-icon.png'

function NavBar() {
    return (
        <div className="NavBar">
            <nav className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
                <div className="flex justify-center flex-grow">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src={Logo} width={40} height={40} style={{ layout: "fixed" }} />
                    </a>
                    <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            <input className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" placeholder="Search Facebook"/>
                    </div>
                    <div className="flex justify-center flex-grow">
                        <div className="flex space-x-6 md:space-x-2">
                            <section className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
                                <img src={Home} width={22} height={22} className="h-5 text-gray-500 text-center sm:h-7 mx:auto group-hover:text-blue-500 text-blue-300" />
                            </section>
                            <section className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
                                <img src={Message}   width={22} height={22}  />
                            </section>
                            <section className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
                                <img src={Video} width={22} height={22} />
                            </section>

                
                        </div>
                    </div>
                    <div className="flex items-center sm:space-2 justify-end">
                        <img src={Profile} width={40} height={40}  style={{ layout: "fixed" }} />
                    </div>
                   
                    
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
