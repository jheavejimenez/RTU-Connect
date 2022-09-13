import React from "react";
import {useNavigate} from "react-router-dom";

function Button({text, path}) {
    const navigate = useNavigate();
    return (
        <>
            <button
                type={"submit"}
                className={"w-60 px-4 py-2 font-bold text-white bg-blue-500 rounded-full " +
                    "hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                }
                onClick={() => navigate(path)}
            >
                {text}
            </button>
        </>
    );
}

export default Button;
