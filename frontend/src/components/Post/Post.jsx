import React from "react";
import { ArrowsRightLeftIcon, ChatBubbleBottomCenterIcon, HeartIcon } from "@heroicons/react/24/outline";
import logoProfile from "../../icons/profile-icon.png";

function Post({
    post, wallet, lensHub, profileId,
}) {
    console.log("post", profileId.picture);
    return (
        <>
            <div className={"mx-auto shadow-md bg-white font-bold rounded-md mb-5 w-2/5"}>
                <div className={"flex flex-row px-2 py-3 mx-3"}>
                    <div className={"w-auto h-auto rounded-full"}>
                        <img
                            className={"w-12 h-12 object-cover rounded-full shadow cursor-pointer"}
                            alt={"User avatar"}
                            src={post.profile.picture.original.url}
                        />
                    </div>
                    <div className={"flex flex-col mb-2 ml-4 mt-1"}>
                        <div className={"text-gray-600 text-sm font-semibold"}>{post.profile.handle.replace(".test", "")}</div>
                        <div className={"flex w-full mt-1"}>
                            <div className={"font-base text-xs mr-1 cursor-pointer"
                                + " text-transparent bg-clip-text bg-gradient-to-r "
                                + "from-blue-700 to-red-400"}
                            >
                                {"@ "}
                                {post.profile.handle.replace(".test", ".rtu")}
                            </div>
                            <div className={"text-gray-400 font-thin text-xs"}>
                                {"• 30 seconds ago"}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"border-b border-gray-100"} />
                <div className={"text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2"} />
                <div className={"text-gray-500 text-sm mb-6 mx-3 px-2"}>
                    {post.metadata.description}
                </div>
                <div className={"flex justify-start  mb-4 border-t border-gray-100"}>
                    <div className={"flex w-full mt-1 pt-2 pl-5"}>
                        <span
                            className={"transition ease-out duration-300 active:bg-gray-200  w-8 h-8 px-1 py-1 text-center rounded-full text-blue-400 cursor-pointer mr-2"}
                        >
                            <ChatBubbleBottomCenterIcon
                                className={"h-6 w-6 text-gray-400 hover:text-blue-800 cursor-pointer"}
                            />
                        </span>
                    </div>
                    <div className={"flex justify-end w-full mt-1 pt-2 pr-5"}>
                        <span
                            className={"transition ease-out duration-300 active:bg-gray-200  w-8 h-8 px-1 py-1 text-center rounded-full text-blue-400 cursor-pointer mr-2"}
                        >
                            <ArrowsRightLeftIcon
                                className={"h-6 w-6 text-gray-400 hover:text-blue-800 cursor-pointer"}
                            />
                        </span>
                        <span
                            className={"transition ease-out duration-300 active:bg-gray-200  h-8 px-2 py-1 text-center rounded-full text-gray-100 cursor-pointer"}
                        >
                            <HeartIcon className={"h-6 w-6 text-red-600 hover:text-red-700 cursor-pointer"} />
                        </span>
                    </div>
                </div>
                <div className={"flex w-full object-contain border-t border-gray-100"}>
                    <div className={"mt-3 mx-5 flex flex-row text-xs"}>
                        <div className={"flex text-gray-700 rounded-md mb-2 mr-4 items-center"}>
                            {"Comments:"}
                            <div className={"ml-1 text-gray-400 text-ms"}>{post.stats.totalAmountOfComments}</div>
                        </div>
                        <div className={"flex text-gray-700 rounded-md mb-2 mr-4 items-center"}>
                            {"Shares:"}
                            <div
                                className={"ml-1 text-gray-400 text-ms"}
                            >
                                {" "}
                                {post.stats.totalAmountOfMirrors}
                            </div>
                        </div>
                    </div>
                    <div className={"mt-3 mx-5 w-full flex justify-end text-xs"}>
                        <div className={"flex text-gray-700  rounded-md mb-2 mr-4 items-center"}>
                            {"Collects:"}
                            <div
                                className={"ml-1 text-gray-400  text-ms"}
                            >
                                {" "}
                                {post.stats.totalAmountOfCollects}
                            </div>
                        </div>
                    </div>
                </div>

                {/* need to convert this to components, comment section */}
                <div
                    className={"relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400"}
                >
                    <img
                        className={"w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"}
                        alt={"User avatar"}
                        // check if profileId.picture exists if not use logoProfile
                        src={profileId.picture ? profileId.picture : logoProfile}
                    />
                    <input
                        type={"search"}
                        className={"w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border "
                            + "border-transparent appearance-none rounded-md placeholder-gray-400"}
                        placeholder={"Post a comment..."}
                        autoComplete={"off"}
                    />
                </div>
                {/* end of comment section */}
            </div>

        </>
    );
}

export default Post;
