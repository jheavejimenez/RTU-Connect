import React from "react";
import moment from "moment/moment";
import Avatar from "../Avatar/Avatar";
import Heading from "./HeadingV2";
import Actions from "./ActionsV2";
import { fixURL } from "../../utils/helpers";

function PostV2({ post }) {
    const avatarLink = fixURL(post.profile.picture?.original.url);
    return (
        // eslint-disable-next-line no-underscore-dangle
        post.__typename === "Post" ? (
            <div className={"mx-auto shadow-md bg-white rounded-md mb-5 w-full"}>
                <div className={"border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out"}>
                    <div className={"grid grid-cols-[auto,1fr] gap-3"}>
                        <Avatar src={avatarLink} alt={post.metadata.media?.original?.mimeType} />
                        <div>
                            <Heading
                                name={post.profile.handle.replace(".test", "")}
                                username={post.profile.handle.replace(".test", ".rtu")}
                                time={moment(post.createdAt).fromNow()}
                            />
                            <div className={"whitespace-pre-wrap break-words leading-md linkify text-md"}>
                                {post.metadata.content}
                            </div>
                            <Actions
                                replies={post.stats.totalAmountOfComments}
                                retweets={post.stats.totalAmountOfMirrors}
                                likes={post.stats.totalAmountOfCollects}
                            />
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className={"mx-auto shadow-md bg-white rounded-md mb-5 w-full"}>
                <div className={"border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out"}>
                    <div className={"grid grid-cols-[auto,1fr] gap-3"}>
                        <Avatar src={avatarLink} alt={post.metadata.media?.original?.mimeType} />
                        <div>
                            <Heading
                                name={post.mainPost.profile.handle.replace(".test", "")}
                                username={post.mainPost.profile.handle.replace(".test", ".rtu")}
                                time={moment(post.mainPost.createdAt).fromNow()}
                            />
                            <div className={"whitespace-pre-wrap break-words leading-md linkify text-md"}>
                                {post.mainPost.metadata.content}
                            </div>
                            <Actions
                                replies={post.mainPost.stats.totalAmountOfComments}
                                retweets={post.mainPost.stats.totalAmountOfMirrors}
                                likes={post.mainPost.stats.totalAmountOfCollects}
                            />
                        </div>
                    </div>
                    <div className={"grid grid-cols-[auto,1fr] gap-3 my-5"}>
                        <Avatar src={avatarLink} alt={post.metadata.media?.original?.mimeType} />
                        <div>
                            <Heading
                                name={post.profile.handle.replace(".test", "")}
                                username={post.profile.handle.replace(".test", ".rtu")}
                                time={moment(post.createdAt).fromNow()}
                            />
                            <div className={"whitespace-pre-wrap break-words leading-md linkify text-md"}>
                                {post.metadata.content}
                            </div>
                            <Actions
                                replies={post.stats.totalAmountOfComments}
                                retweets={post.stats.totalAmountOfMirrors}
                                likes={post.stats.totalAmountOfCollects}
                                isComment
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default PostV2;