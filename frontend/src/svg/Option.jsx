import React from "react";

const SVGOption = (props) => (
    <svg 
        fill={"currentColor"}
        viewBox="0 0 20 20"
        width={"1em"}
        height={"1em"}
        className={"relative top-6 right-6 cursor-pointer"}
        {...props}
         >
        <g fill-rule="evenodd" transform="translate(-446 -350)">
            <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
        </g>
    </svg>
);

export default SVGOption;