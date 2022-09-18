import React from "react";
import Gallery from "../../svg/Gallery";
import ButtonNoClassName from "../Button/ButtonNoClassName";

function ComposePost() {
    return (

        <div
            className={"relative z-10 p-0"}
            aria-labelledby={"modal-title"}
            role={"dialog"}
            aria-modal={"true"}
        >
            <div className={"relative inset-0 overflow-auto"}>
                <div className={"flex min-h-full items-end justify-center text-center md:items-center md"}>
                    <div className={"mx-auto shadow-md bg-white font-bold my-4 rounded-md mb-5 w-2/5 "}>
                        <div className={"bg-white px-4 pt-5 pb-3 sm:p-6 sm:pb-3"}>
                            <textarea
                                id={"message"}
                                rows={"4"}
                                className={"block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white "}
                                placeholder={"What's on your mind"}
                            />
                            <div className={"sm:flex sm:items-start"}>
                                <div className={"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"}>
                                    <div className={"mt-2"} />
                                </div>
                            </div>
                        </div>
                        <div className={"bg-white px-4 py-3 flex justify-between px-6"}>
                            <Gallery />
                            <ButtonNoClassName
                                className={"inline-flex justify-center rounded-full border border-transparent bg-blue-800 px-4 py-2 "
                                    + "text-base font-medium text-white shadow-sm hover:bg-blue-700 "
                                    + "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"}
                                text={"Post"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComposePost;
