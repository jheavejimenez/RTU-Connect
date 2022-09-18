import React from "react";

function SVGCDropdown(props) {
    return (
        <svg
            width={"4"}
            height={"5"}
            viewBox={"0 0 24 24"}
            fill={"none"}
            {...props}
            className={"mr-20 cursor-pointer"}
        >
            <path
                d={"M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"}
                fill={"currentColor"}
            />
        </svg>
    );
}

export default SVGCDropdown;
