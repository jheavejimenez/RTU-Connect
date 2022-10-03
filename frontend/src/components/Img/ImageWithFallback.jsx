import React, { useState } from "react";

function ImageWithFallback({ fallback, src, ...props }) {
    const [imgSrc, setImgSrc] = useState(src);
    const onError = () => setImgSrc(fallback);

    return <img src={imgSrc || fallback} onError={onError} {...props} alt={"user avatar"} />;
}

export default ImageWithFallback;
