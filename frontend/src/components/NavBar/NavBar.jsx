import React from 'react'
import Logo from '../../icons/rtu-icon.png'
import Profile from '../../icons/profile-icon.png'
import SVGHome from "../../svg/Home";
import SVGCommunity from "../../svg/Community";
import Watch from "../../svg/Watch";
import Search from "../../svg/Search";


function NavBar() {
    return (
        <div className={"NavBar"}>
            <nav className={"sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md"}>
                <div className={"flex justify-between mx-10 items-center w-full"}>
                    <div className={"flex items-center"}>
                        <a href={"/"} className={"mr-3"}>
                            <img src={Logo} width={40} height={40} style={{layout: "fixed"}}/>
                        </a>
                        <div className={"flex ml-2 items-center rounded-full bg-gray-100 p-2"}>
                            <button className={"outline-none focus:outline-none"}>
                                <Search/>
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
                            <span>
                                <SVGCommunity/>
                            </span>
                        </li>
                        <li className={"mx-4"}>
                            <span>
                                <Watch/>
                            </span>
                        </li>
                    </ul>
                    <a href={"/profile"} className={"mr-3"}>
                        <img src={Profile} width={40} height={40} style={{layout: "fixed"}}/>
                    </a>

                    {/*<button path={"/login"}>*/}
                    {/*    <img src={Profile} width={40} height={40} style={{layout: "fixed"}}  />*/}
                    {/*</button>*/}
                    {/*<div className="absolute right-3 border-t w-32 bg-blue-800 text-left text-white rounded-lg shadow-md">*/}
                    {/*    <a href="#" className="block p-2 hover:bg-blue-700 hover:rounded-lg">My Profile</a>*/}
                    {/*    <a href="#" className="block p-2 hover:bg-blue-700 hover:rounded-lg">Settings</a>*/}
                    {/*    <a href="#" className="block p-2 hover:bg-blue-700 hover:rounded-lg">Log Out</a>*/}
                    {/*</div>*/}

                </div>
            </nav>
        </div>
    )
}

export default NavBar;
