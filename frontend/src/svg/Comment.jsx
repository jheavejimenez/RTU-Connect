import React from "react";

function SVGComment(props) {
    return (
        <svg
            width={"25"}
            height={"26"}
            viewBox={"0 0 25 26"}
            fill={"currentColor"}
            {...props}
        >
            <path
                d={"M21.875 0.5H3.125C1.40137 0.5 0 1.90137 0 3.625V17.6875C0 19.4111 1.40137 20.8125 3.125 20.8125H7.8125V24.9141C7.8125 25.3926 8.35938 25.6709 8.74512 25.3877L14.8438 20.8125H21.875C23.5986 20.8125 25 19.4111 25 17.6875V3.625C25 1.90137 23.5986 0.5 21.875 0.5Z"}
                fill={"#C3C3C3"}
            />
        </svg>
    );
}

export default SVGComment;
