import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonNoClassName({ text, className, path }) {
    const navigate = useNavigate();
    return (
        <>
            <button
                type={"submit"}
                className={className}
                onClick={() => navigate(path)}
            >
                {text}
            </button>
        </>
    );
}

export default ButtonNoClassName;
