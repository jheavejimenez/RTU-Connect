import React from "react";
import Gallery from "../../svg/Gallery";
import ButtonFunctionCall from "../Button/ButtonFunctionCall";

function ComposeComment({ content }) {
    return (
        <div className={"mx-auto shadow-md bg-white rounded-md mb-5 w-full"}>
            <div className={"border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out"}>
                <textarea
                    rows={"2"}
                    className={"block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border"
                        + " focus:ring-blue-500 focus:border-blue-500 whitespace-pre-wrap"}
                    placeholder={"Tell something cool"}
                    value={content}
                />
            </div>
            <div className={"bg-white pt-3 pb-5 flex justify-between px-6"}>
                <Gallery />
                <ButtonFunctionCall
                    text={"Comment"}
                />
            </div>
        </div>
    );
}

export default ComposeComment;
