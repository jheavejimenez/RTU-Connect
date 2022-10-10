import React from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

function Heading({ name, username, time }) {
    return (
        <div className={"flex gap-1 items-center mb-3"}>
            <h1 className={"font-bold"}>{name}</h1>
            <div className={"font-base text-sm mr-1 cursor-pointer"
                + " text-transparent bg-clip-text bg-gradient-to-r "
                + "from-blue-700 to-red-400"}
            >
                {"@"}
                {username}
            </div>
            <span className={"text-neutral-500"}>{"•"}</span>
            <h2 className={"text-neutral-500"}>{time}</h2>
            <div
                className={"p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer transition-colors duration-500 ease-out"}
            >
                <EllipsisHorizontalIcon className={"w-4 h-4 text-neutral-400 group-hover:text-sky-500"} />
            </div>
        </div>
    );
}

export default Heading;
