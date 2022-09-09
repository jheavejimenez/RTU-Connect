import React from "react";

function Button({text}) {
    return (
        <>
            <button
                type={"submit"}
                className={
                    "inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug rounded-lg hover:bg-blue-700 " +
                    "focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                }
            >
                {text}
            </button>
        </>
    );
}

export default Button;
