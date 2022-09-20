import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import {
    ArrowRightOnRectangleIcon,
    Cog6ToothIcon,
    ExclamationTriangleIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useMoralis } from "react-moralis";

export default function Example() {
    const navigate = useNavigate();
    const { logout } = useMoralis();

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    return (

        <Menu as={"div"} className={"relative inline-block text-left"}>
            <div>
                <Menu.Button
                    as={"img"}
                    className={"inline-block h-10 w-10 rounded-full ring-2 ring-blue-800"}
                    src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    alt={"avatar"}
                />
            </div>
            <Transition
                as={Fragment}
                enter={"transition ease-out duration-100"}
                enterFrom={"transform opacity-0 scale-95"}
                enterTo={"transform opacity-100 scale-100"}
                leave={"transition ease-in duration-75"}
                leaveFrom={"transform opacity-100 scale-100"}
                leaveTo={"transform opacity-0 scale-95"}
            >
                <Menu.Items
                    className={"absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"}
                >
                    <div className={"px-1 py-1 "}>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${
                                        active ? "bg-gray-100" : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    onClick={() => navigate("/profile")}
                                >
                                    <UserIcon className={"mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-900"} aria-hidden={"true"} />
                                    {"Profile"}
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${
                                        active ? "bg-gray-100" : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    <Cog6ToothIcon className={"mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-900"} aria-hidden={"true"} />
                                    {"Settings"}
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                    <div className={"px-1 py-1"}>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`${
                                        active ? "bg-gray-100" : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    onClick={() => handleLogout()}
                                >
                                    <ArrowRightOnRectangleIcon className={"mr-3 h-5 w-5 text-red-400 group-hover:text-red-700"} aria-hidden={"true"} />
                                    {"Logout"}
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                    <div className={"px-1 py-1"}>
                        <Menu.Item as={"h3"} className={"group flex w-full items-center rounded-md px-2 py-2 text-sm"}>
                            <ExclamationTriangleIcon className={"mr-3 h-5 w-5 text-yellow-600 group-hover:text-yellow-700"} aria-hidden={"true"} />
                            {"v-1.0.0-beta"}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>

    );
}

function DuplicateActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox={"0 0 20 20"}
            fill={"none"}
            xmlns={"http://www.w3.org/2000/svg"}
        >
            <path
                d={"M4 4H12V12H4V4Z"}
                fill={"#8B5CF6"}
                stroke={"#C4B5FD"}
                strokeWidth={"2"}
            />
            <path
                d={"M8 8H16V16H8V8Z"}
                fill={"#8B5CF6"}
                stroke={"#C4B5FD"}
                strokeWidth={"2"}
            />
        </svg>
    );
}

function ArchiveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox={"0 0 20 20"}
            fill={"none"}
            xmlns={"http://www.w3.org/2000/svg"}
        >
            <rect
                x={"5"}
                y={"8"}
                width={"10"}
                height={"8"}
                fill={"#EDE9FE"}
                stroke={"#A78BFA"}
                strokeWidth={"2"}
            />
            <rect
                x={"4"}
                y={"4"}
                width={"12"}
                height={"4"}
                fill={"#EDE9FE"}
                stroke={"#A78BFA"}
                strokeWidth={"2"}
            />
            <path d={"M8 12H12"} stroke={"#A78BFA"} strokeWidth={"2"} />
        </svg>
    );
}

function ArchiveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox={"0 0 20 20"}
            fill={"none"}
            xmlns={"http://www.w3.org/2000/svg"}
        >
            <rect
                x={"5"}
                y={"8"}
                width={"10"}
                height={"8"}
                fill={"#8B5CF6"}
                stroke={"#C4B5FD"}
                strokeWidth={"2"}
            />
            <rect
                x={"4"}
                y={"4"}
                width={"12"}
                height={"4"}
                fill={"#8B5CF6"}
                stroke={"#C4B5FD"}
                strokeWidth={"2"}
            />
            <path d={"M8 12H12"} stroke={"#A78BFA"} strokeWidth={"2"} />
        </svg>
    );
}

function MoveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox={"0 0 20 20"}
            fill={"none"}
            xmlns={"http://www.w3.org/2000/svg"}
        >
            <path d={"M10 4H16V10"} stroke={"#A78BFA"} strokeWidth={"2"} />
            <path d={"M16 4L8 12"} stroke={"#A78BFA"} strokeWidth={"2"} />
            <path d={"M8 6H4V16H14V12"} stroke={"#A78BFA"} strokeWidth={"2"} />
        </svg>
    );
}

function MoveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox={"0 0 20 20"}
            fill={"none"}
            xmlns={"http://www.w3.org/2000/svg"}
        >
            <path d={"M10 4H16V10"} stroke={"#C4B5FD"} strokeWidth={"2"} />
            <path d={"M16 4L8 12"} stroke={"#C4B5FD"} strokeWidth={"2"} />
            <path d={"M8 6H4V16H14V12"} stroke={"#C4B5FD"} strokeWidth={"2"} />
        </svg>
    );
}

function DeleteInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox={"0 0 20 20"}
            fill={"none"}
            xmlns={"http://www.w3.org/2000/svg"}
        >
            <rect
                x={"5"}
                y={"6"}
                width={"10"}
                height={"10"}
                fill={"#EDE9FE"}
                stroke={"#A78BFA"}
                strokeWidth={"2"}
            />
            <path d={"M3 6H17"} stroke={"#A78BFA"} strokeWidth={"2"} />
            <path d={"M8 6V4H12V6"} stroke={"#A78BFA"} strokeWidth={"2"} />
        </svg>
    );
}

function DeleteActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox={"0 0 20 20"}
            fill={"none"}
            xmlns={"http://www.w3.org/2000/svg"}
        >
            <rect
                x={"5"}
                y={"6"}
                width={"10"}
                height={"10"}
                fill={"#8B5CF6"}
                stroke={"#C4B5FD"}
                strokeWidth={"2"}
            />
            <path d={"M3 6H17"} stroke={"#C4B5FD"} strokeWidth={"2"} />
            <path d={"M8 6V4H12V6"} stroke={"#C4B5FD"} strokeWidth={"2"} />
        </svg>
    );
}
