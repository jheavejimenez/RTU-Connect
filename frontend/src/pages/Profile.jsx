import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useQuery } from "@apollo/client";
import SVGCopyCLick from "../svg/Copy/CopyClick";
import SVGCopyNotClick from "../svg/Copy/CopyNotClick";
import NavBar from "../components/NavBar/NavBar";
import Gallery from "../svg/Gallery";
import ButtonNoClassName from "../components/Button/ButtonNoClassName";
import SVGComment from "../svg/Comment";
import SVGShare from "../svg/Share";
import SVGLike from "../svg/Like";
import { useAuth } from "../hooks/useAuth";
import logoProfile from "../icons/profile-icon.png";
import { GET_PROFILE, GET_TIMELINE } from "../graphQL/queries";
import PostV2 from "../components/Post/Postv2";

function Profile() {
    const [isCopied, setIsCopied] = useState(false);
    const [profileData, setProfileData] = useState([]);
    const [publications, setPublications] = useState([]);
    const { profile } = useAuth();

    const onCopy = React.useCallback(() => {
        setIsCopied(true);
    }, []);

    const { data } = useQuery(GET_PROFILE, {
        variables: {
            request: {
                profileId: profile.id,
            },
        },
    });
    const { data: timelineData, loading } = useQuery(GET_TIMELINE, {
        variables: {
            request: {
                profileId: profile.id,
            },
        },
    });

    useEffect(() => {
        if (!timelineData) return;

        if (timelineData.timeline.items.length < 1) {
            return;
        }

        const posts = [];
        timelineData.timeline.items.forEach((item) => {
            posts.push(item);
            setPublications(posts);
        });
    }, [timelineData]);

    useEffect(() => {
        if (!data) return;
        setProfileData(data.profile);
    }, [data]);

    return (
        <>
            <NavBar />
            <main className={"grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 mx-12 w-2xl container px-2 mx-auto"}>
                <aside className={""}>
                    <div className={"bg-white shadow rounded-lg p-10"}>
                        <div className={"flex flex-col gap-1 text-center items-center"}>
                            <img
                                className={"h-32 w-32 bg-white p-2 rounded-full shadow mb-4"}
                                alt={"user avatar"}
                                // check if profileId.picture exists if not use logoProfile
                                src={profile?.picture ? profile?.picture : logoProfile}
                            />
                            <p className={"font-semibold"}>
                                {"@"}
                                {profile.handle.replace(".test", ".rtu")}
                            </p>
                            <div className={"text-sm leading-normal text-gray-400 flex justify-center items-center"}>
                                {profileData?.ownedBy !== undefined ? (`Wallet Address: ${profileData?.ownedBy.slice(0, 6)}...${profileData?.ownedBy.slice(-4)}`) : (
                                    <span className={"text-sm animate-pulse text-blue-900"}>{"...loading"}</span>
                                )}
                                <CopyToClipboard onCopy={onCopy} text={profileData?.ownedBy}>
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
                                <p className={"text-black"}>{profileData?.stats?.totalFollowers}</p>
                                <span className={"text-gray-400"}>{"Followers"}</span>
                            </div>
                            <div className={"font-semibold text-center mx-4"}>
                                <p className={"text-black"}>{profileData?.stats?.totalFollowing}</p>
                                <span className={"text-gray-400"}>{"Folowing"}</span>
                            </div>
                        </div>
                    </div>
                </aside>
                <article>
                    {loading && (
                        <>
                            <div className={"mx-auto shadow-md bg-white font-bold rounded-md mb-3 w-full"}>
                                <div className={"flex p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg animate-pulse"}>
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

export default Profile;
