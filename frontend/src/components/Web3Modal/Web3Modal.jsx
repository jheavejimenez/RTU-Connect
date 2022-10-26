import React, { useState } from "react";

function Web3Modal() {
    const [showModal, setShowModal] = useState(true);

    return (
        <>
            {showModal && (
                <>
                    <div className={" justify-center items-center flex overflow-x-hidden overflow-y-auto "
                        + " fixed inset-0 z-50 outline-none focus:outline-none shadow-lg "}
                    >
                        <div className={"container mx-auto w-11/12 md:w-2/3 max-w-md"}>
                            {/* content */}
                            <div
                                className={" relative py-6 px-6 md:px-6 bg-white shadow-md "
                                    + " rounded border border-gray-400 "}
                            >
                                {/* header */}
                                <div
                                    className={" flex items-start justify-between pb-3 border-b "
                                        + " border-solid border-slate-200 rounded-t-md "}
                                >
                                    <h3 className={"text-2xl font-semi-bold text-black"}>
                                        {"RTU Connnect Instruction"}
                                    </h3>
                                    {/* eslint-disable-next-line max-len */}
                                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                                    <button
                                        className={" p-1 ml-auto text-gray-400 hover:text-black opacity-50 "
                                            + " float-right text-3xl leading-none font-semi-bold outline-none "
                                            + " focus:outline-none "}
                                        type={"button"}
                                        onClick={() => setShowModal(false)}
                                    />
                                </div>
                                {/* body */}
                                <div className={"space-y-6 px-6 lg:px-6 pb-4 sm:pb-6 xl:pb-6 mt-4"}>
                                    <div className={"flex"}>
                                        <div>
                                            <span>
                                                {"1."}
                                                <a
                                                    href={"https://metamask.io/"}
                                                    className={"underline text-blue-500 "}
                                                >
                                                    {"Download Metamask"}
                                                </a>
                                            </span>
                                            {" "}
                                            <br />
                                            <span>{"2. Click the \"Get started\" button"}</span>
                                            {" "}
                                            <br />
                                            <span>{"3. Select from either of the two button \"No thanks\" or \"I Agree\" "}</span>
                                            {" "}
                                            <br />
                                            <span>{"4. Next, Select \"Create a Wallet\"  "}</span>
                                            {" "}
                                            <br />
                                            <span>{"5. Enter your preferred password and Check the \"I have read and agree to the Terms of use\" and Click the create button  "}</span>
                                            {" "}
                                            <br />
                                            <span>{"6. Click next, And Reveal your Secret Words. (Save or take a picture of your Secret words for log in credentials)    "}</span>
                                            {" "}
                                            <br />
                                            <span>{"7. Click next, and select your secret words (It should be the same series as shown before) "}</span>
                                            {" "}
                                            <br />
                                            <span>{"8. You now have a Metamask account! "}</span>
                                            {" "}
                                            <br />
                                            <span>{"9. Now head to RTU Connect and use your metamask wallet for log in Credentials. "}</span>
                                            {" "}
                                            <br />

                                        </div>

                                    </div>
                                </div>
                                {/* footer */}
                                <div
                                    className={" flex items-center justify-end pt-6 border-t "
                                        + "border-solid border-slate-200 rounded-b-md"}
                                >

                                    <button
                                        className={" bg-blue-500 hover:bg-blue-400 text-white "
                                            + " active:bg-emerald-600 font-bold uppercase text-sm px-6 "
                                            + " py-3 rounded shadow hover:shadow-lg outline-none "
                                            + " focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "}
                                        type={"button"}
                                        onClick={() => setShowModal(false)}
                                    >
                                        {" "}
                                        {"Close"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"opacity-25 fixed inset-0 z-40 bg-black"} />
                </>
            )}
            {","}
        </>

    );
}

export default Web3Modal;
