import React from "react";

function SVGSearch() {
    return (
        <svg
            className={"w-5 text-gray-600 h-5 cursor-pointer"}
            fill={"none"}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            strokeWidth={"2"}
            stroke={"currentColor"}
            viewBox={"0 0 24 24"}
        >
            <path d={"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"} />
        </svg>
    );
}

export default SVGSearch;
