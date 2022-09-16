import React from "react";

function ButtonFunctionCall({text, func, type}) {
    return (
        <>
            <button
                type={type}
                className={"w-60 px-4 py-2 font-bold text-white bg-blue-500 rounded-full " +
                    "hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                }
                onClick={func}
            >
                {text}
            </button>
        </>
    );


}

export default ButtonFunctionCall;
