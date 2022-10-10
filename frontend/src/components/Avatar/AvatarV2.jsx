import React from "react";

function Avatar({ src, alt }) {
    return (
        <div className={"w-12 h-12 overflow-hidden rounded-full"}>
            <img src={src} alt={alt} className={"w-full"} />
        </div>
    );
}
export default Avatar;
