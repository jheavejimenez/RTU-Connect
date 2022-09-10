import React from "react";

function Button({text}) {
    return (
        <>
            <button
                type={"submit"}
                className={"w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full " +
                    "hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                }
            >
                {text}
            </button>
        </>
    );
}

export default Button;
