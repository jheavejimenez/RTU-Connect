import React, { useState } from "react";

function AvatarV2({ src, alt, fallback }) {
    const [imgSrc, setImgSrc] = useState(src);
    const onError = () => setImgSrc(fallback);

    return (
        <div className={"w-12 h-12 overflow-hidden rounded-full"}>
            <img
                src={imgSrc || fallback}
                onError={onError}
                alt={alt}
                className={"w-full"}
            />
        </div>
    );
}
export default AvatarV2;
