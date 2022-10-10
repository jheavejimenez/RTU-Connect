import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLazyQuery, useQuery } from "@apollo/client";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import { GET_COMMENT_FEED, GET_PUBLICATION } from "../graphQL/queries";
import PostV2 from "../components/Post/Postv2";
import NavBar from "../components/NavBar/NavBar";
import Avatar from "../components/Avatar/Avatar";
import Heading from "../components/Post/HeadingV2";
import Actions from "../components/Post/ActionsV2";
import { fixURL } from "../utils/helpers";

function Comment() {
    const { publicationId } = useParams();
    const [comments, setComments] = useState([]);
    const [publication, setPublicationData] = useState({});

    const { data, loading } = useQuery(GET_COMMENT_FEED, {
        variables: {
            request: {
                "commentsOf": publicationId,
                "limit": 10,
            },
        },
    });

    const { data: publicationData } = useQuery(GET_PUBLICATION, {
        variables: {
            request: {
                "publicationId": publicationId,
            },
        },
    });

    useEffect(() => {
        if (!publicationData) return;
        setPublicationData(publicationData.publication);
    }, [publicationData]);

    useEffect(() => {
        if (!data) return;
        setComments(data.publications.items);
    }, [data]);

    console.log(publication);
    return (
        <>
            {loading ? (
                <div className={"flex justify-center items-center"}>
                    <div className={"loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"} />
                </div>
            ) : (
                <>
                    <NavBar />

                    <main className={"grid grid-cols-1 lg:grid-cols-2 gap-6 my-5 mx-12 w-2xl container px-2 mx-auto"}>
                        <aside>
                            <div className={"bg-yellow-100 border border-yellow-400 gap-1 px-4 py-3 rounded-md"}>
                                <div className={"flex my-3"}>
                                    <ExclamationTriangleIcon
                                        className={"mr-3 h-6 w-6 text-yellow-700"}
                                        aria-hidden={"true"}
                                    />
                                    <span className={"font-bold text-yellow-700"}>{"Beta Warning"}</span>
                                </div>
                                <div className={"text-sm text-yellow-700"}>
                                    {"RTU Connect is still in the beta phase, things may break, please handle us with care."}
                                </div>
                            </div>
                            <div className={"bg-white shadow gap-2 px-4 py-3 my-5 rounded-md"}>
                                <div className={"flex my-3"}>
                                    <span className={"font-bold text-gray-900"}>{"Who to follow"}</span>
                                </div>
                            </div>
                        </aside>
                        <article>
                            {/* <PostV2 */}
                            {/*    post={publication} */}
                            {/*    key={publication.id} */}
                            {/* /> */}

                            <div className={"rounded-none sm:rounded-xl border"}>
                                <div className={"mb-2"}>
                                    <div
                                        className={"mention-input mention-input--multiLine"}
                                    >
                                        <div className={"mention-input__control"}>
                                            <div
                                                className={"mention-input__highlighter"}
                                            />
                                            <textarea
                                                placeholder={"Tell something cool!"}
                                                className={"mention-input__input"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={"block items-center sm:flex"}>
                                    <div className={"flex items-center space-x-4"}>
                                        <div>
                                            <button type={"button"} aria-label={"Choose Attachment"}>
                                                <label
                                                    className={"flex gap-1 items-center cursor-pointer"}
                                                    htmlFor={":rd:"}
                                                >
                                                    <span>
                                                        <svg
                                                            xmlns={"http://www.w3.org/2000/svg"}
                                                            fill={"none"}
                                                            viewBox={"0 0 24 24"}
                                                            strokeWidth={"2"}
                                                            stroke={"currentColor"}
                                                            aria-hidden={"true"}
                                                            className={"w-5 h-5 text-brand"}
                                                        >
                                                            <path
                                                                strokeLinecap={"round"}
                                                                strokeLinejoin={"round"}
                                                                d={"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}
                                                            />
                                                        </svg>
                                                    </span>
                                                    <input
                                                        id={":rd:"}
                                                        type={"file"}
                                                        multiple={""}
                                                        accept={"image/*, video/*"}
                                                        className={"hidden"}
                                                    />
                                                </label>
                                            </button>
                                        </div>
                                        <span>
                                            <button type={"button"} aria-label={"Choose GIFs"}>
                                                <div
                                                    className={"w-full fill-brand-500 dark:fill-brand-400"}
                                                >
                                                    <svg
                                                        viewBox={"0 0 24 24"}
                                                        className={"w-5 h-5"}
                                                    >
                                                        <g>
                                                            <path
                                                                d={"M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"}
                                                            />
                                                            <path
                                                                d={"M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"}
                                                            />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </button>
                                        </span>
                                        <span>
                                            <button
                                                type={"button"}
                                                aria-label={"Choose Collect Module"}
                                            >
                                                <div className={"text-brand"}>
                                                    <svg
                                                        xmlns={"http://www.w3.org/2000/svg"}
                                                        fill={"none"}
                                                        viewBox={"0 0 24 24"}
                                                        strokeWidth={"2"}
                                                        stroke={"currentColor"}
                                                        aria-hidden={"true"}
                                                        className={"h-5"}
                                                    >
                                                        <path
                                                            strokeLinecap={"round"}
                                                            strokeLinejoin={"round"}
                                                            d={"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}
                                                        />
                                                    </svg>
                                                </div>
                                            </button>
                                        </span>
                                        <div data-headlessui-state={""}>
                                            <button
                                                id={"headlessui-menu-button-:re:"}
                                                aria-haspopup={"true"}
                                                aria-expanded={"false"}
                                                data-headlessui-state={""}
                                                type={"button"}
                                            >
                                                <div className={"text-brand"}>
                                                    <svg
                                                        xmlns={"http://www.w3.org/2000/svg"}
                                                        fill={"none"}
                                                        viewBox={"0 0 24 24"}
                                                        strokeWidth={"2"}
                                                        stroke={"currentColor"}
                                                        aria-hidden={"true"}
                                                        className={"w-5"}
                                                    >
                                                        <path
                                                            strokeLinecap={"round"}
                                                            strokeLinejoin={"round"}
                                                            d={"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"}
                                                        />
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={"ml-auto pt-2 sm:pt-0"}>
                                        <button
                                            className={"bg-brand-500 hover:bg-brand-600 border border-brand-600 text-white focus:ring-brand-400 px-3 py-1 flex items-center space-x-1.5 rounded-lg font-bold disabled:opacity-50 shadow-sm focus:ring-2 focus:ring-opacity-50 focus:ring-offset-1 outline-none"}
                                        >
                                            <svg
                                                xmlns={"http://www.w3.org/2000/svg"}
                                                fill={"none"}
                                                viewBox={"0 0 24 24"}
                                                strokeWidth={"2"}
                                                stroke={"currentColor"}
                                                aria-hidden={"true"}
                                                className={"w-4 h-4"}
                                            >
                                                <path
                                                    strokeLinecap={"round"}
                                                    strokeLinejoin={"round"}
                                                    d={"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"}
                                                />
                                            </svg>
                                            <div>{"Comment"}</div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {comments.map((comment) => (
                                <div
                                    className={"mx-auto shadow-md bg-white rounded-md mb-5 w-full"}
                                    key={comment.id}
                                >
                                    <div className={"border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out"}>
                                        <div className={"grid grid-cols-[auto,1fr] gap-3"}>
                                            <Avatar
                                                src={fixURL(comment.profile.picture?.original.url)}
                                                alt={comment.metadata.media?.original?.mimeType}
                                            />
                                            <div>
                                                <Heading
                                                    name={comment.profile.handle.replace(".test", "")}
                                                    username={comment.profile.handle.replace(".test", ".rtu")}
                                                    time={moment(comment.createdAt).fromNow()}
                                                />
                                                <div className={"whitespace-pre-wrap break-words leading-md linkify text-md"}>
                                                    {comment.metadata.content}
                                                </div>
                                                <Actions
                                                    replies={comment.stats.totalAmountOfComments}
                                                    retweets={comment.stats.totalAmountOfMirrors}
                                                    likes={comment.stats.totalAmountOfCollects}
                                                    publicationId={comment.id}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </article>
                    </main>
                </>
            )} 
        </>
    );
}

export default Comment;
