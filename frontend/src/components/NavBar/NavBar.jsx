import React from "react";
import Logo from "../../icons/rtu-icon.png";
import SVGHome from "../../svg/Home";
import SVGCommunity from "../../svg/Community";
import Watch from "../../svg/Watch";
import Search from "../../svg/Search";
import Avatar from "../Dropdown/Avatar";

function NavBar() {
    return (
        <div className={"NavBar"}>
            <nav className={"sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md"}>
                <div className={"flex justify-between mx-10 items-center w-full"}>
                    <div className={"flex items-center"}>
                        <a href={"/"} className={"mr-3"}>
                            <img src={Logo} width={40} height={40} style={{ layout: "fixed" }} alt={"logo"} />
                        </a>
                        <div className={"flex ml-2 items-center rounded-full bg-gray-100 p-2"}>
                            <button className={"outline-none focus:outline-none"}>
                                <Search />
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
                                <SVGHome />
                            </span>
                        </li>
                        <li className={"mx-4"}>
                            <span>
                                <SVGCommunity />
                            </span>
                        </li>
                        <li className={"mx-4"}>
                            <span>
                                <Watch />
                            </span>
                        </li>
                    </ul>
                    <Avatar />
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
