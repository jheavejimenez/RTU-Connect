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
import ComposeComment from "../components/ComposeComment/ComposeComment";

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
                            <ComposeComment />
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
