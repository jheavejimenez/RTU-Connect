import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SVGCopyCLick from "../svg/Copy/CopyClick";
import SVGCopyNotClick from "../svg/Copy/CopyNotClick";
import NavBar from "../components/NavBar/NavBar";
import Gallery from "../svg/Gallery";
import ButtonNoClassName from "../components/Button/ButtonNoClassName";
import SVGComment from "../svg/Comment";
import SVGShare from "../svg/Share";
import SVGLike from "../svg/Like";
import { useAuth } from "../hooks/useAuth";

function Profile() {
    const [isCopied, setIsCopied] = useState(false);
    const { wallet } = useAuth();

    const onCopy = React.useCallback(() => {
        setIsCopied(true);
    }, []);

    return (
        <>
            <NavBar />
            <main className={"grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 mx-12 w-2xl container px-2 mx-auto"}>
                <aside className={""}>
                    <div className={"bg-white shadow rounded-lg p-10"}>
                        <div className={"flex flex-col gap-1 text-center items-center"}>
                            <img
                                className={"h-32 w-32 bg-white p-2 rounded-full shadow mb-4"}
                                src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"}
                                alt={""}
                            />
                            <p className={"font-semibold"}>{"John Doe"}</p>
                            <div className={"text-sm leading-normal text-gray-400 flex justify-center items-center"}>
                                {"Wallet Address: "}
                                {wallet.address !== null ? (`${wallet.address.slice(0, 6)}...${wallet.address.slice(-4)}`) : "Loading..."}
                                <CopyToClipboard onCopy={onCopy} text={wallet.address}>
                                    <button className={"ml-2"}>
                                        {isCopied ? (
                                            <SVGCopyCLick />
                                        ) : (
                                            <SVGCopyNotClick />
                                        )}
                                    </button>
                                </CopyToClipboard>
                            </div>
                        </div>
                        <div className={"flex justify-center items-center gap-2 my-3"}>
                            <div className={"font-semibold text-center mx-4"}>
                                <p className={"text-black"}>
                                    {"0"}
                                    {" "}
                                    {"MATIC"}
                                </p>
                                <span className={"text-gray-400"}>
                                    {"Wallet Balance"}
                                </span>
                            </div>
                            <div className={"font-semibold text-center mx-4"}>
                                <p className={"text-black"}>{"102"}</p>
                                <span className={"text-gray-400"}>{"Followers"}</span>
                            </div>
                            <div className={"font-semibold text-center mx-4"}>
                                <p className={"text-black"}>{"102"}</p>
                                <span className={"text-gray-400"}>{"Folowing"}</span>
                            </div>
                        </div>
                    </div>
                </aside>
                <article>
                    <div
                        className={"relative z-10 p-0"}
                        aria-labelledby={"modal-title"}
                        role={"dialog"}
                        aria-modal={"true"}
                    >
                        <div className={"relative inset-0 overflow-auto"}>
                            <div className={"flex min-h-full items-end justify-center text-center md:items-center md"}>
                                <div className={"mx-auto shadow-md bg-white font-bold rounded-md mb-5 w-full"}>
                                    <div className={"bg-white px-4 pt-5 pb-3 sm:p-6 sm:pb-3"}>
                                        <textarea
                                            id={"message"}
                                            rows={"4"}
                                            className={"block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border resize-none"
                                                + " focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white "}
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
                    <div className={"mx-auto shadow-md bg-white font-bold rounded-md mb-14 w-full"}>
                        <div className={"flex flex-row px-2 py-3 mx-3"}>
                            <div className={"w-auto h-auto rounded-full"}>
                                <img
                                    className={"w-12 h-12 object-cover rounded-full shadow cursor-pointer"}
                                    alt={"User avatar"}
                                    src={Profile}
                                />
                            </div>
                            <div className={"flex flex-col mb-2 ml-4 mt-1"}>
                                <div className={"text-gray-600 text-sm font-semibold"}>{"John Doe"}</div>
                                <div className={"flex w-full mt-1"}>
                                    <div className={"text-blue-700 font-base text-xs mr-1 cursor-pointer"}>
                                        {"SEO"}
                                    </div>
                                    <div className={"text-gray-400 font-thin text-xs"}>
                                        {"• 30 seconds ago"}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"border-b border-gray-100"} />
                        <div className={"text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2"}>
                            <div className={"grid grid-cols-6 col-span-2   gap-2  "}>
                                <div className={" overflow-hidden rounded-xl col-span-3 max-h-[14rem]"}>
                                    <img
                                        className={"h-full w-full object-cover "}
                                        src={"https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"}
                                        alt={""}
                                    />
                                </div>
                                <div className={" overflow-hidden rounded-xl col-span-3 max-h-[14rem]"}>
                                    <img
                                        className={"h-full w-full object-cover  "}
                                        src={"https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1399&amp;q=80"}
                                        alt={""}
                                    />
                                </div>
                                <div className={" overflow-hidden rounded-xl col-span-2 max-h-[10rem]"}>
                                    <img
                                        className={"h-full w-full object-cover "}
                                        src={"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"}
                                        alt={""}
                                    />
                                </div>
                                <div className={" overflow-hidden rounded-xl col-span-2 max-h-[10rem]"}>
                                    <img
                                        className={"h-full w-full object-cover "}
                                        src={"https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"}
                                        alt={""}
                                    />
                                </div>
                                <div className={"relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]"}>
                                    <div
                                        className={"text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center"}
                                    >
                                        {"+ 23"}
                                    </div>
                                    <img
                                        className={"h-full w-full object-cover "}
                                        src={"https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=765&amp;q=80"}
                                        alt={""}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={"text-gray-500 text-sm mb-6 mx-3 px-2"}>
                            {"Lorem Ipsum is simply dummy text of the printing"}
                            {"and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"}
                            {"1500"}
                        </div>
                        <div className={"flex justify-start  mb-4 border-t border-gray-100"}>
                            <div className={"flex w-full mt-1 pt-2 pl-5"}>
                                <span
                                    className={"transition ease-out duration-300 active:bg-gray-700  h-8 px-2 py-1 text-center rounded-full text-gray-100 cursor-pointer"}
                                >
                                    <SVGComment />
                                </span>
                                <img
                                    className={"inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"}
                                    src={"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"}
                                    alt={""}
                                />
                                <img
                                    className={"inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"}
                                    src={"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"}
                                    alt={""}
                                />
                                <img
                                    className={"inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"}
                                    src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"}
                                    alt={""}
                                />
                                <img
                                    className={"inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"}
                                    src={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80"}
                                    alt={""}
                                />
                            </div>
                            <div className={"flex justify-end w-full mt-1 pt-2 pr-5"}>
                                <span
                                    className={"transition ease-out duration-300 active:bg-gray-700  w-8 h-8 px-1 py-1 text-center rounded-full text-blue-400 cursor-pointer mr-2"}
                                >
                                    <SVGShare />
                                </span>
                                <span
                                    className={"transition ease-out duration-300 active:bg-red-700  h-8 px-2 py-1 text-center rounded-full text-gray-100 cursor-pointer"}
                                >
                                    <SVGLike />
                                </span>
                            </div>
                        </div>
                        <div className={"flex w-full object-contain border-t border-gray-100"}>
                            <div className={"mt-3 mx-5 flex flex-row text-xs"}>
                                <div className={"flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center"}>
                                    {"Comments:"}
                                    <div className={"ml-1 text-gray-400 text-ms"}>{" 30"}</div>
                                </div>
                                <div className={"flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center"}>
                                    {"Views:"}
                                    <div
                                        className={"ml-1 text-gray-400 text-ms"}
                                    >
                                        {" "}
                                        {"60k"}
                                    </div>
                                </div>
                            </div>
                            <div className={"mt-3 mx-5 w-full flex justify-end text-xs"}>
                                <div className={"flex text-gray-700  rounded-md mb-2 mr-4 items-center"}>
                                    {"Likes:"}
                                    <div
                                        className={"ml-1 text-gray-400  text-ms"}
                                    >
                                        {" "}
                                        {"120k"}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"text-black p-4 antialiased flex"}>
                            <img
                                className={"rounded-full h-8 w-8 mr-2 mt-1 "}
                                src={"https://picsum.photos/id/1027/200/200"}
                                alt={""}
                            />
                            <div>
                                <div className={"bg-gray-100 rounded-lg px-4 pt-2 pb-2.5 font-normal"}>
                                    <div className={"font-semibold text-sm leading-relaxed"}>{"Sara Lauren"}</div>
                                    <div className={"text-xs leading-snug md:leading-normal"}>
                                        {"Lorem ipsum dolor sit amet,"}
                                        {"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"}
                                        {"aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"}
                                        {"aliquip ex ea commodo consequat."}
                                    </div>
                                </div>
                                <div className={"text-xs  mt-0.5 text-gray-500"}>{"14 w"}</div>
                                <div
                                    className={"bg-white border border-white rounded-full float-right -mt-8 mr-0.5 flex shadow items-center "}
                                >
                                    <svg
                                        className={"p-0.5 h-5 w-5 rounded-full z-20 bg-white"}
                                        xmlns={"http://www.w3.org/2000/svg"}
                                        xmlnsXlink={"http://www.w3.org/1999/xlink"}
                                        viewBox={"0 0 16 16"}
                                    >
                                        <defs>
                                            <linearGradient id={"a1"} x1={"50%"} x2={"50%"} y1={"0%"} y2={"100%"}>
                                                <stop offset={"0%"} stopColor={"#18AFFF"} />
                                                <stop offset={"100%"} stopColor={"#0062DF"} />
                                            </linearGradient>
                                            <filter
                                                id={"c1"}
                                                width={"118.8%"}
                                                height={"118.8%"}
                                                x={"-9.4%"}
                                                y={"-9.4%"}
                                                filterUnits={"objectBoundingBox"}
                                            >
                                                <feGaussianBlur
                                                    in={"SourceAlpha"}
                                                    result={"shadowBlurInner1"}
                                                    stdDeviation={"1"}
                                                />
                                                <feOffset dy={"-1"} in={"shadowBlurInner1"} result={"shadowOffsetInner1"} />
                                                <feComposite
                                                    in={"shadowOffsetInner1"}
                                                    in2={"SourceAlpha"}
                                                    k2={"-1"}
                                                    k3={"1"}
                                                    operator={"arithmetic"}
                                                    result={"shadowInnerInner1"}
                                                />
                                                <feColorMatrix
                                                    in={"shadowInnerInner1"}
                                                    values={"0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0"}
                                                />
                                            </filter>
                                            <path id={"b1"} d={"M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z"} />
                                        </defs>
                                        <g fill={"none"}>
                                            <use fill={"url(#a1)"} xlinkHref={"#b1"} />
                                            <use fill={"black"} filter={"url(#c1)"} xlinkHref={"#b1"} />
                                            <path
                                                fill={"white"}
                                                d={"M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z"}
                                            />
                                        </g>
                                    </svg>
                                    <svg
                                        className={"p-0.5 h-5 w-5 rounded-full -ml-1.5 bg-white"}
                                        xmlns={"http://www.w3.org/2000/svg"}
                                        xmlnsXlink={"http://www.w3.org/1999/xlink"}
                                        viewBox={"0 0 16 16"}
                                    >
                                        <defs>
                                            <linearGradient id={"a2"} x1={"50%"} x2={"50%"} y1={"0%"} y2={"100%"}>
                                                <stop offset={"0%"} stopColor={"#FF6680"} />
                                                <stop offset={"100%"} stopColor={"#E61739"} />
                                            </linearGradient>
                                            <filter
                                                id={"c2"}
                                                width={"118.8%"}
                                                height={"118.8%"}
                                                x={"-9.4%"}
                                                y={"-9.4%"}
                                                filterUnits={"objectBoundingBox"}
                                            >
                                                <feGaussianBlur
                                                    in={"SourceAlpha"}
                                                    result={"shadowBlurInner1"}
                                                    stdDeviation={"1"}
                                                />
                                                <feOffset dy={"-1"} in={"shadowBlurInner1"} result={"shadowOffsetInner1"} />
                                                <feComposite
                                                    in={"shadowOffsetInner1"}
                                                    in2={"SourceAlpha"}
                                                    k2={"-1"}
                                                    k3={"1"}
                                                    operator={"arithmetic"}
                                                    result={"shadowInnerInner1"}
                                                />
                                                <feColorMatrix
                                                    in={"shadowInnerInner1"}
                                                    values={"0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0"}
                                                />
                                            </filter>
                                            <path id={"b2"} d={"M8 0a8 8 0 100 16A8 8 0 008 0z"} />
                                        </defs>
                                        <g fill={"none"}>
                                            <use fill={"url(#a2)"} xlinkHref={"#b2"} />
                                            <use fill={"black"} filter={"url(#c2)"} xlinkHref={"#b2"} />
                                            <path
                                                fill={"white"}
                                                d={"M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41"}
                                            />
                                        </g>
                                    </svg>
                                    <span className={"text-sm ml-1 pr-1.5 text-gray-500"}>{"3"}</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className={"relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400"}
                        >
                            <img
                                className={"w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"}
                                alt={"User avatar"}
                                src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"}
                            />
                            <span className={"absolute inset-y-0 right-0 flex items-center pr-6"}>
                                <button type={"submit"} className={"p-1 focus:outline-none focus:shadow-none hover:text-blue-500"}>
                                    <svg
                                        className={"w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400"}
                                        xmlns={"http://www.w3.org/2000/svg"}
                                        fill={"none"}
                                        viewBox={"0 0 24 24"}
                                        stroke={"currentColor"}
                                    >
                                        <path
                                            strokeLinecap={"round"}
                                            strokeLinejoin={"round"}
                                            strokeWidth={"2"}
                                            d={"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}
                                        />
                                    </svg>

                                </button>
                            </span>
                            <input
                                type={"search"}
                                className={"w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"}
                                placeholder={"Post a comment..."}
                                autoComplete={"off"}
                            />
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Profile;
