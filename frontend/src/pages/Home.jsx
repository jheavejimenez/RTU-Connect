import React, { useEffect, useState } from "react";
import "../index.css";
import { useLazyQuery, useQuery } from "@apollo/client";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import NavBar from "../components/NavBar/NavBar";
import Post from "../components/Post/Post";
import { GET_TIMELINE, HAS_COLLECTED, SEARCH } from "../graphQL/queries";
import { useAuth } from "../hooks/useAuth";
import ComposePost from "../components/ComposePost/ComposePost";

function Home({ wallet, lensHub }) {
    const [notFound, setNotFound] = useState(false);
    const [publications, setPublications] = useState([]);
    const { profile } = useAuth();

    const { data } = useQuery(GET_TIMELINE, {
        variables: {
            request: {
                profileId: profile.id,
            },
        },
    });
    const [hasCollected, hasCollectedData] = useLazyQuery(HAS_COLLECTED);

    useEffect(() => {
        if (!data) return;

        if (data.timeline.items.length < 1) {
            setNotFound(true);
            return;
        }

        const pubIds = {};
        const pubs = [];

        data.timeline.items.forEach((post) => {
            if (pubIds[post.id]) return;

            pubIds[post.id] = true;
            pubs.push(post);
        });

        setPublications(pubs);

        const publications = data.timeline.items.map((thing) => thing.id);

        hasCollected({
            variables: {
                request: {
                    collectRequests: [
                        {
                            walletAddress: wallet.address,
                            publicationIds: publications,
                        },
                    ],
                },
            },
        });
    }, [data]);

    useEffect(() => {
        if (!hasCollectedData.data) return;

        const collectedIds = {};

        hasCollectedData.data.hasCollected[0].results.forEach((result) => {
            if (result.collected) {
                collectedIds[result.publicationId] = true;
            }
        });

        console.log(collectedIds);

        const newPubs = publications.map((post) => ({ ...post, collected: collectedIds[post.id] }));

        setPublications([...newPubs]);
    }, [hasCollectedData.data]);

    const searchData = useQuery(SEARCH, {
        variables: {
            request: {
                query: "RTU",
                type: "PUBLICATION",
            },
        },
    });

    useEffect(() => {
        if (!searchData.data) return;
        if (publications.length > 0) return;

        if (searchData.data.search.items.length < 1) {
            return;
        }

        setPublications(searchData.data.search.items);
    }, [searchData.data]);

    return (
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
                    {notFound && (
                        <>
                            <div className={"mx-auto shadow-md bg-white font-bold rounded-md mb-3 w-full"}>
                                <div className={"flex p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg"}>
                                    {"You don't follow anyone. Here are some posts #WAGMI"}
                                </div>
                            </div>
                            <ComposePost profile={profile.id} />
                        </>
                    )}
                    {
                        publications.map((post) => (
                            <Post
                                key={post.id}
                                post={post}
                                wallet={wallet}
                                lensHub={lensHub}
                                profileId={profile}
                            />
                        ))
                    }
                </article>
            </main>
        </>
    );
}

export default Home;
