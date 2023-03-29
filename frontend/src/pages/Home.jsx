import React, { useEffect, useState } from "react";
import "../index.css";
import { useQuery } from "@apollo/client";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import NavBar from "../components/NavBar/NavBar";
import { GET_EXPLORE } from "../graphQL/queries";
import { useAuth } from "../hooks/useAuth";
import ComposePost from "../components/ComposePost/ComposePost";
import PostV2 from "../components/Post/Postv2";
import logoProfile from "../icons/profile-icon.png";
import AvatarV2 from "../components/Avatar/AvatarV2";
import { staffNames } from "../utils/constants";

function Home({ setPost }) {
    const [notFound, setNotFound] = useState(false);
    const [publications, setPublications] = useState([]);
    const { profile } = useAuth();

    const { data, loading } = useQuery(GET_EXPLORE);

    useEffect(() => {
        if (!data) return;

        if (data.explorePublications.items < 1) {
            setNotFound(true);
            return;
        }

        const posts = [];
        data.explorePublications.items.forEach((item) => {
            posts.push(item);
            setPublications(posts);
            setPost(posts);
        });
    }, [data]);
    return (
        <>
            <NavBar />

            <main className={"grid grid-cols-1 lg:grid-cols-2 gap-6 my-5 mx-12 w-max container px-2 mx-auto"}>
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
                        <div>
                            {staffNames.map((staff) => (
                                <div className={"flex items-center gap-2 mb-3"}>
                                    <AvatarV2 src={logoProfile} />
                                    <div className={"flex flex-col"}>
                                        <span className={"font-bold text-gray-900"}>{staff}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
                <article>
                    <ComposePost profile={profile.id} />
                    {notFound && (
                        <>
                            <div className={"mx-auto shadow-md bg-white font-bold rounded-md mb-3 w-full"}>
                                <div className={"flex p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg"}>
                                    {"You don't follow anyone. Start posting now!"}
                                </div>
                            </div>
                        </>
                    )}
                    {loading && (
                        <>
                            <div className={"mx-auto shadow-md bg-white font-bold rounded-md mb-3 w-full"}>
                                <div
                                    className={"flex p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg animate-pulse"}
                                >
                                    {"Loading..."}
                                </div>
                            </div>
                        </>
                    )}
                    {
                        publications.map((post) => (
                            <PostV2 post={post} key={post.id} />
                        ))
                    }
                </article>
            </main>
        </>
    );
}

export default Home;
