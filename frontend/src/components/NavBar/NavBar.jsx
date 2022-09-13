import React from 'react'
import Logo from '../../icons/rtu-icon.png'
import Profile from '../../icons/profile-icon.png'
import SVGHome from "../../svg/Home";

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
                            <span>
                                <SVGHome/>
                            </span>
                        </li>
                        <li className={"mx-4"}>
                            <span className="om3e55n1">
                               
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
