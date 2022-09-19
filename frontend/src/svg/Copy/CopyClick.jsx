import * as React from "react";

function SVGCopyCLick(props) {
    return (
        <svg
            width={"24px"}
            height={"24px"}
            viewBox={"0 0 24 24"}
            xmlns={"http://www.w3.org/2000/svg"}
            className={"h-5 w-5 text-green-500"}
            {...props}
            fill={"currentColor"}
        >
            <path
                fillRule={"evenodd"}
                d={"M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 01-1.75 1.75H8.774a1.75 1.75 0 01-1.75-1.75V3.75zm1.75-.25a.25.25 0 00-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H8.774z"}
                clipRule={"evenodd"}
            />
            <path d={"M1.995 10.749a1.75 1.75 0 011.75-1.751H5.25a.75.75 0 110 1.5H3.745a.25.25 0 00-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 00.25-.25v-1.51a.75.75 0 111.5 0v1.51A1.75 1.75 0 0113.25 22h-9.5A1.75 1.75 0 012 20.25l-.005-9.501z"} />
        </svg>
    );
}

export default SVGCopyCLick;
