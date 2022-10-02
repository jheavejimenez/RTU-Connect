import React, { useEffect, useState } from "react";
import "../index.css";
import { useLazyQuery, useQuery } from "@apollo/client";
import NavBar from "../components/NavBar/NavBar";
import Post from "../components/Post/Post";
import { GET_TIMELINE, HAS_COLLECTED, SEARCH } from "../graphQL/queries";
import { useAuth } from "../hooks/useAuth";

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
                query: "LFG",
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
            <>
                {notFound && (
                    <div className={"mx-auto shadow-md bg-yellow-100 font-bold rounded-md mb-14 w-2/5"}>
                        <div className={"flex p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg"}>
                            {"You don't follow anyone. Here are some posts"}
                        </div>
                    </div>
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
            </>
        </>
    );
}

export default Home;
