import React from 'react'
import Logo from '../../icons/rtu-icon.png'
import Profile from '../../icons/profile-icon.png'

function NavBar() {
    return (
        <div className={"NavBar"}>
            <nav className={"sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md"}>
                <div className={"flex justify-between mx-10 items-center w-full"}>
                    <div className={"flex items-center"}>
                        <a href={"/home"} className={"mr-3"}>
                            <img src={Logo} width={40} height={40} style={{layout: "fixed"}}/>
                        </a>
                        <div className={"flex ml-2 items-center rounded-full bg-gray-100 p-2"}>
                            <button className={"outline-none focus:outline-none"}>
                                <svg className={"w-5 text-gray-600 h-5 cursor-pointer"} fill="none"
                                     stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                     stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                            <input
                                className={"w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"}
                                placeholder={"Search"}
                                type={"search"}
                            />
                        </div>
                    </div>
                    <ul className={"flex justify-center items-center"}>
                        <li className={"mx-4"}>

                        </li>
                        <li className={"mx-4"}>
                            <span className="om3e55n1">
                               <span className="om3e55n1"><svg viewBox="0 0 28 28"
                                                               className="b6ax4al1 m4pnbp5e somyomsx ahndzqod gnhxmgs4"
                                                               fill="currentColor" height="28" width="28"><path
                                   d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"></path></svg>
                                   <span className="s8sjc6am o3m1n7fs ejru8ifv"></span></span>
                            </span>
                        </li>
                        <li className={"mx-4"}>
                            <span className="om3e55n1">
                                <svg viewBox="0 0 28 28" fill="currentColor" height="28" width="28">
                                    <path
                                        d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"></path>
                                </svg>
                                <span className="s8sjc6am o3m1n7fs ejru8ifv"></span>
                            </span>
                        </li>
                    </ul>
                    <div className={"flex items-center sm:space-2 justify-end"}>
                        <img src={Profile} width={40} height={40} style={{layout: "fixed"}}/>
                    </div>


                </div>
            </nav>
        </div>
    )
}

export default NavBar;
